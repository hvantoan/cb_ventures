'use client';

import { confirm } from '@fumy/ui/helpers';
import { useToggle } from '@fumy/utilities/hooks';
import { deleteBotAction } from '@modules/(category)/_actions/delete-bot-action';
import { LoadingButton } from '@mui/lab';
import { Button, Tooltip, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { PageHeader } from '@/components/page-header';
import { editRoute, newRoute } from '@/generic-routes';
import { BOT_QK } from '@/query/query-keys';
import { botsPath } from '@/routes';

interface BotDetailFormProps {
  botId?: string;
}

const TITLE = 'Bot #';
const SAVE_BUTTON_LABEL = 'Lưu';
const EDIT_BUTTON_TEXT = 'Chỉnh sửa';
const REMOVE_BUTTON_TEXT = 'Xóa';
const TITLE_NEW = 'Thêm bot';

const BotInfoHeader: React.FC<BotDetailFormProps> = ({ botId }) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();
  const isEditing = pathname.includes(editRoute);
  const isNew = pathname.includes(newRoute);

  const { isOpen: isLoading, handleOpen: startLoading, handleClose: stopLoading } = useToggle();

  const handleDeleteBot = useCallback(async () => {
    const check = await confirm({
      title: 'Xoá bot',
      description: 'Bạn có chắc chắn muốn xoá bot này?'
    });
    if (!check) return;

    startLoading();
    const res = await deleteBotAction(botId ?? '');
    if (res?.success) {
      toast.success('Xoá bot thành công');
      await queryClient.invalidateQueries({ queryKey: [BOT_QK] });
      router.push(botsPath);
    } else {
      toast.error(res?.message);
      stopLoading();
    }
  }, [botId]);
  return (
    <PageHeader
      title={
        botId ? <Typography typography='h4'>{TITLE}</Typography> : <Typography typography='h4'>{TITLE_NEW}</Typography>
      }
      backTo={botsPath}
    >
      {Boolean(botId) && !isEditing && (
        <div className='flex items-center gap-2'>
          <Tooltip title={REMOVE_BUTTON_TEXT}>
            <LoadingButton
              onClick={handleDeleteBot}
              loading={isLoading}
              className='min-w-0 px-2 text-white'
              color='warning'
            >
              <span className='i-solar-trash-bin-minimalistic-bold h-6 w-6' />
            </LoadingButton>
          </Tooltip>
          <Button
            startIcon={<span className='i-solar-pen-bold' />}
            component={Link}
            href={`/${botsPath}/${botId}/edit`}
            disabled={isLoading}
          >
            <span>{EDIT_BUTTON_TEXT}</span>
          </Button>
        </div>
      )}
      {(isNew || isEditing) && (
        <div className='flex items-center justify-end gap-4 [&>.MuiButton-root]:min-w-40'>
          <LoadingButton size='large' type='submit' loading={isLoading}>
            <span>{SAVE_BUTTON_LABEL}</span>
          </LoadingButton>
        </div>
      )}
    </PageHeader>
  );
};

export default BotInfoHeader;
