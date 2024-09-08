'use client';

import { confirm } from '@fumy/ui/helpers';
import { Button } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { ROLE_QK } from '@/query/query-keys';
import { settingRolePath } from '@/routes';

import { deleteRoleAction } from '../../_actions/delete-role-action';

interface DeleteRoleButtonProps {
  roleId: string;
}

const BUTTON_LABEL = 'Xóa';

const DeleteRoleButton: React.FC<DeleteRoleButtonProps> = ({ roleId }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleDeleteRole = useCallback(async () => {
    const agree = await confirm({
      title: 'Xác nhận xóa phân quyền',
      description: 'Bạn có chắc chắn muốn xóa phân quyền này không?'
    });
    if (agree) {
      const promise = deleteRoleAction(roleId);
      try {
        await toast.promise(
          promise,
          {
            pending: 'Đang lưu...',
            success: {
              render: ({ data }) => {
                return data?.message;
              }
            },
            error: {
              render: ({ data }) => {
                return (data as Error)?.message;
              }
            }
          },
          {
            delay: 0,
            autoClose: 1000
          }
        );
        await queryClient.invalidateQueries({ queryKey: [ROLE_QK] });

        router.replace(settingRolePath);
      } catch {
        // do nothing
      }
    }
  }, [roleId]);

  return (
    <Button color='error' className='w-32' onClick={handleDeleteRole}>
      {BUTTON_LABEL}
    </Button>
  );
};

export default DeleteRoleButton;
