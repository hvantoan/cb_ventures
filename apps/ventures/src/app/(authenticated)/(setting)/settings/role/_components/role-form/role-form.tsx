'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Role } from '@modules/(setting)/settings/role/_models/role';
import { FORM_ID } from '@modules/(setting)/settings/role/constants';
import { debounce } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { ROLE_QK } from '@/query/query-keys';
import { settingRolePath } from '@/routes';

import { saveRoleAction } from '../../_actions/save-role-action';
import RoleFormData from './role-form-data';
import RoleFormInfo from './role-form-info';
import RoleFormPermissions from './role-form-permissions';

interface RoleFormProps {
  roleId?: string;
}

const validateError: SubmitErrorHandler<Role> = (error) => {
  console.info('Role validate failed', error);
};

const resolver = classValidatorResolver(Role);

const RoleForm: React.FC<RoleFormProps> = ({ roleId }) => {
  const { control, handleSubmit, reset } = useForm<Role>({
    resolver,
    defaultValues: new Role()
  });
  const queryClient = useQueryClient();
  const router = useRouter();

  const successCallback = useCallback(
    debounce(async (formData: Role) => {
      const payload = instanceToPlain(formData) as Role;
      const promise = saveRoleAction(payload);
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
        await queryClient.invalidateQueries({ queryKey: [ROLE_QK] });
        if (!formData?.id) {
          router.replace(settingRolePath);
        }
      } catch {
        // nothing
      }
    }, 300),
    [roleId]
  );

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(successCallback, validateError)}
        className='mt-4 flex flex-col gap-4 md:flex-row'
        id={FORM_ID}
      >
        <RoleFormInfo control={control} roleId={roleId} />
        <RoleFormPermissions control={control} />
      </form>
      <RoleFormData reset={reset} roleId={roleId} />
    </>
  );
};

export default RoleForm;
