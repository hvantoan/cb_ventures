'use client';

import { removeUserAction } from '@modules/(setting)/settings/users/[userId]/_actions/remove-user-action';
import { useQueryUser } from '@modules/(setting)/settings/users/_queries/use-query-user';
import { MenuItem } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { USER_QK } from '@/query/query-keys';
import { settingUserPath } from '@/routes';

interface RemoveUserOptionProps {
  userId: string;
  closeMenu: () => void;
}

const RemoveUserOption: React.FC<RemoveUserOptionProps> = ({ closeMenu, userId }) => {
  const { data: user } = useQueryUser(userId);
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleRemoveUser = useCallback(async () => {
    closeMenu();
    const promise = removeUserAction(userId);
    try {
      await toast.promise(
        promise,
        {
          pending: 'Đang xoá...',
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
        { delay: 0 }
      );
      await queryClient.invalidateQueries({ queryKey: [USER_QK] });
      router.replace(settingUserPath);
    } catch (e) {
      // nothing
    }
  }, [userId]);

  return (
    <MenuItem onClick={handleRemoveUser} disabled={user?.isActive}>
      Xoá
    </MenuItem>
  );
};

export default RemoveUserOption;
