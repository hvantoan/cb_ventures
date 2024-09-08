'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Merchant } from '@modules/(setting)/settings/merchant/_models/merchant';
import { Card, CardContent, TextField } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useCallback, useEffect } from 'react';
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AdministrativeField } from '@/components/administrative-field';
import { MERCHANT_QK } from '@/query/query-keys';
import { useQueryMerchant } from '@/query/shared/use-query-merchant';

import { saveMerchantAction } from '../../_actions/save-merchant-action';
import MerchantFormImages from './merchant-form-images';
import { merchantFormLabels } from './merchant-form.define';

const resolver = classValidatorResolver(Merchant);

const validateError: SubmitErrorHandler<Merchant> = (error) => {
  console.info('Merchant validate failed', error);
};

interface MerchantFormProps {
  formId: string;
}

const MerchantForm: React.FC<MerchantFormProps> = ({ formId }) => {
  const { data: merchant } = useQueryMerchant();

  const { control, handleSubmit, reset, setValue } = useForm({ resolver, defaultValues: new Merchant() });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (merchant) {
      reset(merchant);
    }
  }, [merchant]);

  const validateSuccess = useCallback(async (formData: Merchant) => {
    const payload = instanceToPlain(formData) as Merchant;
    const promise = saveMerchantAction(payload);
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
      await queryClient.invalidateQueries({ queryKey: [MERCHANT_QK] });
    } catch (e) {
      // nothing
    }
  }, []);

  return (
    <Card className='mt-4'>
      <CardContent>
        <form
          className='flex flex-col gap-4'
          id={formId}
          noValidate
          onSubmit={handleSubmit(validateSuccess, validateError)}
        >
          <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
            <Controller
              control={control}
              name='code'
              render={({ field: { value } }) => (
                <TextField label={merchantFormLabels.code} InputProps={{ readOnly: true }} value={value ?? ''} />
              )}
            />
            <Controller
              control={control}
              name='name'
              render={({ field: { value, onChange } }) => (
                <TextField label={merchantFormLabels.name} value={value ?? ''} onChange={onChange} />
              )}
            />
            <Controller
              control={control}
              name='phone'
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextField
                  label={merchantFormLabels.phone}
                  value={value ?? ''}
                  onChange={onChange}
                  helperText={error?.message}
                  error={Boolean(error)}
                />
              )}
            />
            <Controller
              control={control}
              name='email'
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextField
                  label={merchantFormLabels.email}
                  InputProps={{ readOnly: false }}
                  value={value ?? ''}
                  onChange={onChange}
                  helperText={error?.message}
                  error={Boolean(error)}
                />
              )}
            />
            <Controller
              control={control}
              name='province'
              render={({ field: { value, onChange } }) => (
                <AdministrativeField
                  control={control}
                  label={merchantFormLabels.province}
                  onChange={onChange}
                  value={value ?? null}
                  unitType='province'
                  setValue={setValue}
                />
              )}
            />
            <Controller
              control={control}
              name='district'
              render={({ field: { value, onChange } }) => (
                <AdministrativeField
                  control={control}
                  label={merchantFormLabels.district}
                  onChange={onChange}
                  value={value ?? null}
                  unitType='district'
                  setValue={setValue}
                />
              )}
            />
            <Controller
              control={control}
              name='commune'
              render={({ field: { value, onChange } }) => (
                <AdministrativeField
                  control={control}
                  label={merchantFormLabels.commune}
                  onChange={onChange}
                  value={value ?? null}
                  unitType='commune'
                  setValue={setValue}
                />
              )}
            />
            <Controller
              control={control}
              name='address'
              render={({ field: { value, onChange } }) => (
                <TextField
                  label={merchantFormLabels.address}
                  InputProps={{ readOnly: false }}
                  value={value ?? ''}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <MerchantFormImages control={control} />
        </form>
      </CardContent>
    </Card>
  );
};

export default MerchantForm;
