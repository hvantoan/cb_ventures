'use client';

import { QueryTransactionFilter } from '@modules/(services)/_types/transaction-filter';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import { TransactionList } from './transaction-list';
import { TransactionListRef } from './transaction-list/transaction-list';

interface TransactionListWrapperProps {
  initFilter: QueryTransactionFilter;
}

const TITLE = 'Phiếu giao dịch';

const TransactionListWrapper: React.FC<TransactionListWrapperProps> = ({ initFilter }) => {
  const listRef = useRef<TransactionListRef>(null);

  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <Typography typography='h4'>{TITLE}</Typography>
        <div className='flex items-center gap-2'>
          {/* <Button
            component={Link}
            href={`${receiptsPath}/new`}
            startIcon={<span className='i-eva-plus-outline h-4 w-4' />}
            color='info'
          >
            {RECEIPT_TEXT}
          </Button>
          <Button
            component={Link}
            href={`${paymentsPath}/new`}
            startIcon={<span className='i-eva-plus-outline h-4 w-4' />}
            color='secondary'
          >
            {PAYMENT_TEXT}
          </Button> */}
        </div>
      </div>
      <TransactionList initFilter={initFilter} ref={listRef} />
    </>
  );
};

export default TransactionListWrapper;
