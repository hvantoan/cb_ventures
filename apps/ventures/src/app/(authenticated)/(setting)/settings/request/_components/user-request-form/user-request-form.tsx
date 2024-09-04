'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { USER_REQUEST_QK } from '@/query/query-keys';
import { settingRequestPath } from '@/routes';

import { saveUserRequestAction } from '../../_actions/save-user-request-action';
import { UserRequest } from '../../_models/user-request';
import { FORM_ID } from '../../constants';
import UserRequestFormData from './user-request-form-data';
import UserRequestFormDetail from './user-request-form-detail';
import UserRequestFormInfo from './user-request-form-info';

interface UserRequestFormProps {
  requestId?: string;
}

const resolver = classValidatorResolver(UserRequest);

const errorCallback = (error: FieldErrors) => {
  console.info('UserRequest validate failed', error);
};

const UserRequestForm: React.FC<UserRequestFormProps> = ({ requestId }) => {
  const session = useSession();
  const { control, handleSubmit, reset } = useForm({
    resolver,
    defaultValues: new UserRequest(session?.data?.user?.name as string)
  });
  const queryClient = useQueryClient();
  const router = useRouter();

  const successCallback = useCallback(async (formData: UserRequest) => {
    const payload = instanceToPlain(formData) as UserRequest;

    const promise = saveUserRequestAction(payload);

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
        {
          delay: 0,
          autoClose: 1000
        }
      );
      await queryClient.invalidateQueries({ queryKey: [USER_REQUEST_QK] });
      if (!formData?.id) {
        router.replace(settingRequestPath);
      }
    } catch (e) {
      // nothing
    }
  }, []);

  return (
    <form
      noValidate
      id={FORM_ID}
      className='mt-6 flex flex-col gap-4'
      onSubmit={handleSubmit(successCallback, errorCallback)}
    >
      <UserRequestFormInfo control={control} isNew={!requestId} />
      <UserRequestFormDetail control={control} />
      <UserRequestFormData requestId={requestId} reset={reset} />
    </form>
  );
};

export default UserRequestForm;
