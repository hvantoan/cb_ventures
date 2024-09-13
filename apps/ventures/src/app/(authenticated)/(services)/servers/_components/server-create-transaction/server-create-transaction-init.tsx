'use client';

import { TransactionType } from '@modules/(services)/_enums/transaction-type';
import { Transaction } from '@modules/(services)/_models';
import { memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface ServerCreateTransactionInitProps {
  serverId?: string;
  transactionType: TransactionType;
}

const ServerCreateTransactionInit: React.FC<ServerCreateTransactionInitProps> = ({ serverId, transactionType }) => {
  const { reset } = useFormContext<Transaction>();

  useEffect(() => {
    if (!serverId) return;
    reset({ userBotId: serverId, transactionType });
  }, [serverId, transactionType]);

  return null;
};

export default memo(ServerCreateTransactionInit);
