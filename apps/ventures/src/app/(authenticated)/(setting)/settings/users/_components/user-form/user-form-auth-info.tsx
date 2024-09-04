'use client';

import { PasswordField } from '@fumy/ui/components';
import { RoleSelect } from '@modules/(setting)/settings/role/_components/role-select';
import { Card, CardContent, CardHeader, FormControlLabel, Switch, TextField } from '@mui/material';
import { useCallback } from 'react';
import { Control, Controller } from 'react-hook-form';

import { AddUserDto } from '../../_models/add-user-dto';

interface UserFormAuthInfoProps {
  control: Control<AddUserDto>;
  isNew: boolean;
}

const TITLE = 'Thông tin đăng nhập';

const UserFormAuthInfo: React.FC<UserFormAuthInfoProps> = ({ control, isNew = false }) => {
  return (
    <Card>
      <CardHeader title={TITLE} />
      <CardContent className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <Controller
          control={control}
          name='username'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Tên đăng nhập'
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
              required
            />
          )}
        />
        {isNew && (
          <Controller
            control={control}
            name='pinCode'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label='Mã PIN'
                value={value ?? ''}
                onChange={onChange}
                error={Boolean(error)}
                helperText={error?.message}
                required
              />
            )}
          />
        )}
        <Controller
          control={control}
          name='role'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <RoleSelect
              label='Phân quyền'
              value={value ?? null}
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
              size='medium'
              disableClearable
              required
              autoComplete={false}
            />
          )}
        />
        {isNew && (
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <PasswordField
                label='Mật khẩu'
                value={value ?? ''}
                onChange={onChange}
                error={Boolean(error)}
                helperText={error?.message}
                required
              />
            )}
          />
        )}
        {isNew && (
          <Controller
            control={control}
            name='repeatPassword'
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <PasswordField
                label='Xác nhận mật khẩu'
                value={value ?? ''}
                onChange={onChange}
                error={Boolean(error)}
                helperText={error?.message}
                required
              />
            )}
          />
        )}
        <Controller
          control={control}
          name='isActive'
          render={({ field: { onChange, value } }) => {
            const handleChange = useCallback((_: React.ChangeEvent, checked: boolean) => {
              onChange(checked);
            }, []);

            return (
              <div>
                <FormControlLabel
                  className='ml-0 mr-0 whitespace-nowrap'
                  control={<Switch checked={value ?? false} onChange={handleChange} />}
                  label='Cho phép hoạt động'
                  componentsProps={{
                    typography: {
                      variant: 'body2'
                    }
                  }}
                />
              </div>
            );
          }}
        />
      </CardContent>
    </Card>
  );
};

export default UserFormAuthInfo;
