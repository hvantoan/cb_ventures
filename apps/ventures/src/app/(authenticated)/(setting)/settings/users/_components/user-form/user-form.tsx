'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { FORM_ID } from '@modules/(setting)/settings/users/[userId]/constants';
import { saveUserAction } from '@modules/(setting)/settings/users/_actions/save-user-action';
import UserFormAuthInfo from '@modules/(setting)/settings/users/_components/user-form/user-form-auth-info';
import UserFormInfo from '@modules/(setting)/settings/users/_components/user-form/user-form-info';
import { AddUserDto } from '@modules/(setting)/settings/users/_models/add-user-dto';
import { User } from '@modules/(setting)/settings/users/_models/user';
import { debounce } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { USER_QK } from '@/query/query-keys';
import { settingUserPath } from '@/routes';

import UserFormData from './user-form-data';

interface UserFormProps {
  userId?: string;
}

const validateError: SubmitErrorHandler<AddUserDto> = (error) => {
  console.info('Role validate failed', error);
};

const resolver = classValidatorResolver(AddUserDto);

const UserForm: React.FC<UserFormProps> = ({ userId }) => {
  const { control, handleSubmit, setValue, reset } = useForm<AddUserDto>({
    resolver,
    defaultValues: new AddUserDto()
  });
  const queryClient = useQueryClient();
  const router = useRouter();

  const successCallback = useCallback(
    debounce(async (formData: User) => {
      const payload = instanceToPlain(formData) as User;
      const promise = saveUserAction(payload);
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
          { delay: 0, autoClose: 1000 }
        );
        await queryClient.invalidateQueries({ queryKey: [USER_QK] });
        if (!formData?.id) {
          router.replace(settingUserPath);
        }
      } catch (e) {
        // nothing
      }
    }, 300),
    []
  );

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(successCallback, validateError)}
        className='mt-4 flex flex-col gap-4'
        id={FORM_ID}
      >
        <UserFormAuthInfo control={control} isNew={!userId} />
        <UserFormInfo control={control} setValue={setValue} />
      </form>
      <UserFormData reset={reset} userId={userId} />
    </>
  );
};

export default UserForm;
