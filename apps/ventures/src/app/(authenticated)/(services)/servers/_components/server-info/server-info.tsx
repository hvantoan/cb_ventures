'use client';

import { DialogHeader } from '@hvantoan/ui/components';
import { toCurrency } from '@hvantoan/utilities/helpers/number-formatter';
import { Transaction } from '@modules/(services)/_models';
import { useQueryServer } from '@modules/(services)/_queries/use-query-server';
import { useQueryTransactions } from '@modules/(services)/_queries/use-query-transactions';
import { Button, Dialog, DialogContent, Typography } from '@mui/material';
import { MRT_TableContainer, useMaterialReactTable, type MRT_TableOptions } from 'material-react-table';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { tableOptions } from '@/configs/table-options';

import { ETransactionType } from '../../../_enums/transaction-type';
import ServerCreateTransaction from '../server-create-transaction/server-create-transaction';
import { columns } from './server-info.define';

const TITLE = 'Công nợ khách hàng';
const BALANCE_TITLE = 'Tổng vốn: ';
const CREATE_RECEIPT_BUTTON_LABEL = 'Nạp tiền';
const CREATE_REFUND_BUTTON_LABEL = 'Rút tiền';

const ServerInfo: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [serverId, setServerId] = useState(searchParams.get('serverId'));
  const [transactionType, setTransactionType] = useState<ETransactionType | undefined>();

  const { data: server, refetch: refetchServer } = useQueryServer(serverId!);
  const { data: transactions, refetch: refetchTransactions } = useQueryTransactions({
    pageIndex: 0,
    pageSize: 100,
    isAll: true,
    userBotId: serverId ?? ''
  });

  const refresh = () => {
    refetchServer();
    refetchTransactions();
  };

  useEffect(() => {
    const id = searchParams.get('serverId');
    setServerId(id);
    if (id) refresh();
  }, [searchParams]);

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<Transaction>),
    data: transactions?.items ?? [],
    columns,
    enableStickyHeader: true,
    enableColumnActions: false,
    muiTableContainerProps: {
      className: 'max-h-[480px] w-full'
    }
  });

  const handleClose = useCallback(() => {
    setTransactionType(undefined);
    router.back();
  }, []);

  return (
    <>
      <Dialog open={Boolean(serverId)} maxWidth='lg'>
        <DialogHeader
          title={server ? `${TITLE} (${server?.iD_MT4} - ${server.user.name})` : TITLE}
          onClose={handleClose}
        />
        <DialogContent className='px-0'>
          <div className='flex flex-col'>
            <div className='mb-2 flex flex-col items-center justify-between gap-4 p-4 md:flex-row'>
              <Typography variant='subtitle1' component='div' className='shadow-dropdown rounded-md px-4 py-2'>
                {BALANCE_TITLE}
                {toCurrency(server?.balance ?? 0)}
              </Typography>
              <div className='flex items-center gap-3'>
                <Button
                  className='w-32'
                  color='primary'
                  rel='noopener noreferrer'
                  onClick={() => setTransactionType(ETransactionType.Income)}
                >
                  {CREATE_RECEIPT_BUTTON_LABEL}
                </Button>
                <Button
                  className='w-32'
                  color='secondary'
                  rel='noopener noreferrer'
                  onClick={() => setTransactionType(ETransactionType.Outcome)}
                >
                  {CREATE_REFUND_BUTTON_LABEL}
                </Button>
              </div>
            </div>
            <div style={{ width: '100%' }}>
              <MRT_TableContainer table={table} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {serverId && transactionType && (
        <ServerCreateTransaction
          serverId={serverId}
          transactionType={transactionType}
          onClose={() => {
            setTransactionType(undefined);
            refresh();
          }}
        />
      )}
    </>
  );
};

export default ServerInfo;
