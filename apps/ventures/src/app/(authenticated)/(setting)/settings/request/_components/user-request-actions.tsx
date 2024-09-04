'use client';

import { confirm } from '@fumy/ui/helpers';
import { removeUserRequestAction } from '@modules/(setting)/settings/request/_actions/remove-user-request-action';
import { Button } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { USER_REQUEST_QK } from '@/query/query-keys';
import { settingRequestPath } from '@/routes';

import { processUserRequestAction } from '../_actions/process-user-request-action';
import { revokeUserRequestAction } from '../_actions/revoke-user-request-action';
import { useQueryUserRequest } from '../_queries/use-query-user-request';
import { FORM_ID } from '../constants';

interface UserRequestActionsProps {
  requestId: string;
}

const SAVE_BUTTON_LABEL = 'Lưu';
const REMOVE_BUTTON_LABEL = 'Xóa';
const PROCESS_BUTTON_LABEL = 'Thực hiện';
const REVOKE_BUTTON_LABEL = 'Hoàn tác';

const UserRequestActions: React.FC<UserRequestActionsProps> = ({ requestId }) => {
  const { data: request } = useQueryUserRequest(requestId);
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleProcess = useCallback(async () => {
    const agreed = await confirm({
      title: 'Xác nhận thực hiện',
      description: 'Bạn có chắc chắn muốn thực hiện yêu cầu này?'
    });
    if (agreed) {
      const promise = processUserRequestAction(requestId);

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
        await queryClient.invalidateQueries({ queryKey: [USER_REQUEST_QK] });
      } catch {
        // Do nothing
      }
    }
  }, [requestId]);

  const handleRevoke = useCallback(async () => {
    const agreed = await confirm({
      title: 'Xác nhận hoàn tác',
      description: 'Bạn có chắc chắn muốn hoàn tác yêu cầu này?'
    });
    if (agreed) {
      const promise = revokeUserRequestAction(requestId);

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
        router.replace(settingRequestPath);
        await queryClient.invalidateQueries({ queryKey: [USER_REQUEST_QK] });
      } catch {
        // Do nothing
      }
    }
  }, [requestId]);

  const handleRemove = useCallback(async () => {
    const agreed = await confirm({
      title: 'Xác nhận xoá',
      description: 'Bạn có chắc chắn muốn xoá yêu cầu này?'
    });
    if (agreed) {
      const promise = removeUserRequestAction(requestId);

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
        router.replace(settingRequestPath);
        await queryClient.invalidateQueries({ queryKey: [USER_REQUEST_QK] });
      } catch {
        // Do nothing
      }
    }
  }, [requestId]);

  return (
    <div className='flex items-center justify-end gap-2'>
      {(!requestId || request?.canSave) && (
        <Button color='primary' className='w-32' type='submit' form={FORM_ID}>
          {SAVE_BUTTON_LABEL}
        </Button>
      )}
      {request?.canRemove && (
        <Button color='error' className='w-32' onClick={handleRemove}>
          {REMOVE_BUTTON_LABEL}
        </Button>
      )}
      {request?.canProcess && (
        <Button color='info' className='w-32' onClick={handleProcess}>
          {PROCESS_BUTTON_LABEL}
        </Button>
      )}
      {request?.canRevoke && (
        <Button color='warning' className='w-32' onClick={handleRevoke}>
          {REVOKE_BUTTON_LABEL}
        </Button>
      )}
    </div>
  );
};

export default UserRequestActions;
