'use client';

import { confirm } from '@hvantoan/ui/helpers';
import { deleteBotAction } from '@modules/(category)/_actions/delete-bot-action';
import { LoadingButton } from '@mui/lab';
import { Tooltip, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { PageHeader } from '@/components/page-header';
import { BOT_QK } from '@/query/query-keys';
import { serversPath } from '@/routes';

interface ServerDetailFormProps {
  serverId?: string;
  isLoading: boolean; // Add loading state prop
  startLoading: () => void; // Add start loading function prop
  stopLoading: () => void; // Add stop loading function prop
}

const TITLE = 'Server';
const SAVE_BUTTON_LABEL = 'Lưu';
const REMOVE_BUTTON_TEXT = 'Xóa';
const TITLE_NEW = 'Thêm Server';

const ServerInfoHeader: React.FC<ServerDetailFormProps> = ({ serverId, isLoading, startLoading, stopLoading }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleDeleteBot = useCallback(async () => {
    const check = await confirm({
      title: 'Xoá server',
      description: 'Bạn có chắc chắn muốn xoá server này?'
    });
    if (!check) return;

    startLoading();
    const res = await deleteBotAction(serverId ?? '');
    if (res?.success) {
      toast.success('Xoá server thành công');
      await queryClient.invalidateQueries({ queryKey: [BOT_QK] });
      router.push(serversPath);
    } else {
      toast.error(res?.message);
      stopLoading();
    }
  }, [serverId]);

  return (
    <PageHeader
      title={
        serverId ? (
          <Typography typography='h4'>{TITLE}</Typography>
        ) : (
          <Typography typography='h4'>{TITLE_NEW}</Typography>
        )
      }
      backTo={serversPath}
    >
      {Boolean(serverId) && (
        <div className='flex items-center gap-2 pr-2'>
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
        </div>
      )}
      <div className='flex items-center justify-end gap-2 [&>.MuiButton-root]:min-w-40'>
        <LoadingButton size='medium' type='submit' loading={isLoading}>
          <span>{SAVE_BUTTON_LABEL}</span>
        </LoadingButton>
      </div>
    </PageHeader>
  );
};

export default ServerInfoHeader;
