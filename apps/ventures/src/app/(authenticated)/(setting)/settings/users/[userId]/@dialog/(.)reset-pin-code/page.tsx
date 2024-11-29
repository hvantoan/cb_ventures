'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { DialogHeader, PasswordField } from '@hvantoan/ui/components';
import { Button, DialogActions, DialogContent, Typography } from '@mui/material';
import { instanceToPlain } from 'class-transformer';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useQueryUser } from '../../../_queries/use-query-user';
import { resetPinAction } from './_actions/reset-pin-action';
import { ResetPinCodeDto } from './_models/reset-pin-code-dto';

const TITLE = 'Đặt lại mã PIN';
const DESCRIPTION = (
  <span>
    {' '}
    Đặt lại <strong>Mã PIN</strong> cho người dùng{' '}
  </span>
);
const CANCEL_BUTTON_LABEL = 'Hủy';
const SUBMIT_BUTTON_LABEL = 'Lưu';
const FORM_ID = 'reset-password-form';

const resolver = classValidatorResolver(ResetPinCodeDto);

const ResetPinCodeDialogPage: React.FC<Params<'userId'>> = ({ params: { userId } }) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({
    resolver,
    defaultValues: new ResetPinCodeDto(userId)
  });
  const { data: user } = useQueryUser(userId);

  const router = useRouter();

  const handleCancel = useCallback(() => {
    router.back();
  }, []);

  const validateSuccess = useCallback(async (formData: ResetPinCodeDto) => {
    const payload = instanceToPlain(formData) as ResetPinCodeDto;
    const promise = resetPinAction(payload);
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
        { delay: 0 }
      );
      handleCancel();
    } catch {
      // nothing
    }
  }, []);

  return (
    <>
      <DialogHeader title={TITLE} onClose={handleCancel} />
      <DialogContent className='!px-4 md:!px-8'>
        <div>
          <Typography component='span'>
            {DESCRIPTION}
            <strong>{user?.name}</strong>
          </Typography>
          <form className='mt-8 flex flex-col gap-6' id={FORM_ID} noValidate onSubmit={handleSubmit(validateSuccess)}>
            <Controller
              control={control}
              name='pinCode'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <PasswordField
                  label='Mã PIN mới'
                  value={value}
                  onChange={onChange}
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name='repeatPinCode'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <PasswordField
                  label='Xác nhận mã PIN'
                  value={value}
                  onChange={onChange}
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <div className='flex gap-4'>
          <Button onClick={handleCancel} variant='outlined' disabled={isSubmitting}>
            {CANCEL_BUTTON_LABEL}
          </Button>
          <Button type='submit' form={FORM_ID} color='primary' disabled={isSubmitting}>
            {SUBMIT_BUTTON_LABEL}
          </Button>
        </div>
      </DialogActions>
    </>
  );
};

export default ResetPinCodeDialogPage;
