'use client';

import { confirm } from '@fumy/ui/helpers';
import { useToggle } from '@fumy/utilities/hooks';
import { LoadingButton } from '@mui/lab';
import { Button, Tooltip, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { PageHeader } from '@/components/page-header';
import { editRoute } from '@/generic-routes';
import { CONTACT_QK } from '@/query/query-keys';
import { contactsPath } from '@/routes';

import { deleteContactAction } from '../_actions/delete-contact-action';

interface ContactDetailFormProps {
  contactId?: string;
}

const TITLE = 'Liên hệ';

const EDIT_BUTTON_TEXT = 'Chỉnh sửa';
const REMOVE_BUTTON_TEXT = 'Xóa';

const ContactInfoHeader: React.FC<ContactDetailFormProps> = ({ contactId }) => {
  const { isOpen: isLoading, handleOpen: startLoading, handleClose: stopLoading } = useToggle();

  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const isEditing = pathname.includes(editRoute);

  const handleDeleteStore = useCallback(async () => {
    const check = await confirm({
      title: 'Xoá liên hệ',
      description: 'Bạn có chắc chắn muốn xoá liên hệ này?'
    });
    if (!check) return;
    startLoading();
    const res = await deleteContactAction(contactId ?? '');
    if (res?.success) {
      toast.success('Xoá liên hệ thành công');
      await queryClient.invalidateQueries({ queryKey: [CONTACT_QK] });
      router.push(contactsPath);
    } else {
      toast.error(res?.message);
      stopLoading();
    }
  }, [contactId]);

  return (
    <PageHeader title={<Typography typography='h4'>{TITLE}</Typography>} backTo={contactsPath}>
      {Boolean(contactId) && !isEditing && (
        <div className='flex items-center gap-2'>
          <Tooltip title={REMOVE_BUTTON_TEXT}>
            <span>
              <LoadingButton
                onClick={handleDeleteStore}
                className='min-w-0 px-2 text-white'
                color='warning'
                loading={isLoading}
              >
                <span className='i-solar-trash-bin-minimalistic-bold h-6 w-6' />
              </LoadingButton>
            </span>
          </Tooltip>
          <Button
            startIcon={<span className='i-solar-pen-bold' />}
            component={Link}
            href={`/${contactsPath}/${contactId}/edit`}
            disabled={isLoading}
          >
            <span>{EDIT_BUTTON_TEXT}</span>
          </Button>
        </div>
      )}
    </PageHeader>
  );
};

export default ContactInfoHeader;
