'use client';

import { DialogHeader } from '@fumy/ui/components';
import { currencyFormatter } from '@fumy/utilities/helpers/number-formatter';
import { Transaction } from '@modules/(services)/_models';
import { useQueryServer } from '@modules/(services)/_queries/use-query-server';
import { useQueryTransactions } from '@modules/(services)/_queries/use-query-transactions';
import { Button, Dialog, DialogContent, Typography } from '@mui/material';
import { MRT_TableContainer, useMaterialReactTable, type MRT_TableOptions } from 'material-react-table';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { tableOptions } from '@/configs/table-options';

import { TransactionType } from '../../../_enums/transaction-type';
import { columns } from './server-info.define';

const TITLE = 'Công nợ khách hàng';
const BALANCE_TITLE = 'Tổng vốn: ';
const CREATE_RECEIPT_BUTTON_LABEL = 'Nạp tiền';
const CREATE_REFUND_BUTTON_LABEL = 'Rút tiền';

const ServerInfo: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serverId = searchParams.get('serverId');
  const type = searchParams.get('type');

  const { data: server } = useQueryServer(serverId ?? '');
  const { data: transactions } = useQueryTransactions({
    pageIndex: 0,
    pageSize: 100,
    isAll: true,
    userBotId: serverId ?? ''
  });

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<Transaction>),
    data: transactions?.items ?? [],
    columns,
    enableStickyHeader: true,
    enableColumnActions: false,
    muiTableContainerProps: {
      className: 'max-h-[480px]'
    }
  });

  const handleClose = useCallback(() => {
    router.back();
  }, []);

  const handleNavigate = (data: TransactionType) => {
    const url = `?serverId=${serverId}&type=${data}`;
    window.history.pushState(undefined, '', url);
  };

  return (
    <Dialog open={Boolean(serverId) && !type} maxWidth='lg'>
      <DialogHeader
        title={server ? `${TITLE} (${server?.iD_MT4} - ${server.user.name})` : TITLE}
        onClose={handleClose}
      />
      <DialogContent className='px-0'>
        <div className='flex flex-col'>
          <div className='mb-2 flex flex-col items-center justify-between gap-4 p-4 md:flex-row'>
            <Typography variant='subtitle1' component='div' className='shadow-dropdown rounded-md px-4 py-2'>
              {BALANCE_TITLE}
              {currencyFormatter.format(server?.balance ?? 0)}
            </Typography>
            <div className='flex items-center gap-3'>
              <Button
                className='w-32'
                color='primary'
                rel='noopener noreferrer'
                onClick={() => handleNavigate(TransactionType.Income)}
              >
                {CREATE_RECEIPT_BUTTON_LABEL}
              </Button>
              <Button
                className='w-32'
                color='secondary'
                rel='noopener noreferrer'
                onClick={() => handleNavigate(TransactionType.Outcome)}
              >
                {CREATE_REFUND_BUTTON_LABEL}
              </Button>
            </div>
          </div>
          <div>
            <MRT_TableContainer table={table} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServerInfo;
