'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { instanceToPlain } from 'class-transformer';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { dashboardPath, homePath } from '@/routes';

import { LoginDto, loginFormFields } from './login-form.schema';
import { FormBox, Root } from './login-form.styles';

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

  const googleLogin = useCallback(async () => {
    const res = await signIn('google');
    if (res?.error) {
      toast.error(res.error);
    } else {
      router.replace(homePath);
    }
  }, []);

  const discordLogin = useCallback(async () => {
    toast.warning('Tính năng chưa được hổ trợ');
  }, []);

  const gitHubLogin = useCallback(async () => {
    toast.warning('Tính năng chưa được hổ trợ');
  }, []);

  return (
    <FormBox>
      <form onSubmit={handleSubmit(validCallback)}>
        <div className='mb-10'>
          <Typography typography='h4'>{TITLE}</Typography>
        </div>
        <Root>
          <Stack direction='column' gap={1}>
            <Button
              onClick={gitHubLogin}
              variant='outlined'
              className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'
            >
              <Image src='https://www.svgrepo.com/show/512317/github-142.svg' alt='GitHub' width={18} height={18} />
              Tiếp tục với GitHub
            </Button>
            <Button
              onClick={googleLogin}
              variant='outlined'
              className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'
            >
              <Image src='https://www.svgrepo.com/show/475656/google-color.svg' alt='Google' width={18} height={18} />
              Tiếp tục với Google
            </Button>
            <Button
              onClick={discordLogin}
              variant='outlined'
              className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'
            >
              <Image src='https://www.svgrepo.com/show/452188/discord.svg' alt='Discord' width={26} height={26} />
              Tiếp tục với Discord
            </Button>
          </Stack>
          <Divider>Hoặc</Divider>
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
        </Root>
      </form>
    </FormBox>
  );
};

export default LoginForm;
