'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { LoadingButton } from '@mui/lab';
import { Typography } from '@mui/material';
import { instanceToPlain } from 'class-transformer';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { dashboardPath } from '@/routes';

import { LoginDto, loginFormFields } from './login-form.schema';
import { FormBox } from './login-form.styles';

const TITLE = 'Đăng nhập';
const SUBMIT_BUTTON_LABEL = 'Đăng nhập';

const resolver = classValidatorResolver(LoginDto);

const LoginForm: React.FC = () => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit
  } = useForm<LoginDto>({
    resolver,
    defaultValues: new LoginDto()
  });
  const router = useRouter();

  const validCallback = useCallback(async (formData: LoginDto) => {
    const payload = instanceToPlain(formData);

    const res = await signIn('credentials', { ...payload, redirect: false });
    if (res?.error) {
      toast.error(res.error);
    } else {
      router.replace(dashboardPath);
    }
  }, []);

  return (
    <FormBox>
      <form onSubmit={handleSubmit(validCallback)}>
        <div className='mb-10'>
          <Typography typography='h4'>{TITLE}</Typography>
        </div>
        <div className='flex h-full flex-col gap-6'>
          {loginFormFields.map(({ name, Component, componentProps }) => (
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue={componentProps.value}
              render={({ field: { value, onChange }, fieldState: { error } }) => (
                <Component
                  {...componentProps}
                  onChange={onChange}
                  value={value}
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
          ))}
          <LoadingButton fullWidth variant='contained' size='large' loading={isSubmitting} type='submit'>
            {SUBMIT_BUTTON_LABEL}
          </LoadingButton>
        </div>
      </form>
    </FormBox>
  );
};

export default LoginForm;
