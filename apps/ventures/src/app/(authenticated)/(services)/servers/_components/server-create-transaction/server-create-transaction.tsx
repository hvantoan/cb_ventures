'use client';

import { DialogHeader } from '@fumy/ui/components';
import { useToggle } from '@fumy/utilities/hooks';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { modifyTransactionAction } from '@modules/(services)/_actions/modify-transaction-action';
import { TransactionType } from '@modules/(services)/_enums/transaction-type';
import { Transaction } from '@modules/(services)/_models';
import { LoadingButton } from '@mui/lab';
import { Box, Dialog, DialogContent } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { TRANSACTION_QK } from '@/query/query-keys';

import ServerCreateTransactionInfo from './server-create-transaction-info';
import ServerCreateTransactionInit from './server-create-transaction-init';

const INCOME_TITLE = 'Nộp tiền';
const OUTCOME_TITLE = 'Rút tiền';
const SAVE_BUTTON_LABEL = 'Lưu';
const resolver = classValidatorResolver(Transaction);

const handleKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

const ServerCreateTransaction = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serverId = searchParams.get('serverId') ?? '';
  const ticketType: any = searchParams.get('type') ?? '';

  const formMethods = useForm<Transaction>({
    resolver,
    defaultValues: new Transaction(),
    reValidateMode: 'onChange'
  });

  const { handleSubmit } = formMethods;

  const queryClient = useQueryClient();
  const { isOpen: isLoading, handleOpen: startLoading, handleClose: stopLoading } = useToggle();

  const onValid = useCallback(async (data: Transaction) => {
    startLoading();
    const payload = instanceToPlain(data) as Transaction;

    const res = await modifyTransactionAction({
      id: '',
      amount: payload.amount,
      userBotId: serverId ?? '',
      transactionType: ticketType === '2' ? TransactionType.Income : TransactionType.Outcome
    });
    stopLoading();
    if (res.success) {
      toast.success(res.message);
      await queryClient.invalidateQueries({ queryKey: [TRANSACTION_QK] });
      router.back();
    } else {
      toast.error(res.message);
    }
  }, []);

  const handleClose = useCallback(() => {
    router.back();
  }, []);

  return (
    <Dialog open={Boolean(serverId) && Boolean(ticketType)} maxWidth='lg'>
      <DialogHeader title={ticketType === '2' ? INCOME_TITLE : OUTCOME_TITLE} onClose={handleClose} />
      <DialogContent className='px-0'>
        <Box
          component='form'
          className='flex flex-col gap-6'
          noValidate
          onSubmit={handleSubmit(onValid, (e) => {
            console.error(e);
          })}
          onKeyDown={handleKeyDown}
        >
          <FormProvider {...formMethods}>
            <ServerCreateTransactionInfo />
            <div className='m-2 flex items-center justify-end gap-2 [&>.MuiButton-root]:min-w-40'>
              <LoadingButton size='medium' type='submit' loading={isLoading} color='primary'>
                <span>{SAVE_BUTTON_LABEL}</span>
              </LoadingButton>
            </div>
            <ServerCreateTransactionInit serverId={serverId} transactionType={ticketType} />
          </FormProvider>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ServerCreateTransaction;
