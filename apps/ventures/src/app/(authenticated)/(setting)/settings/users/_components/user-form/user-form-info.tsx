'use client';

import { Card, CardContent, CardHeader, TextField } from '@mui/material';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';

import { AdministrativeField } from '@/components/administrative-field';

import { AddUserDto } from '../../_models/add-user-dto';

interface UserFormInfoProps {
  control: Control<AddUserDto>;
  setValue: UseFormSetValue<AddUserDto>;
}

const TITLE = 'Thông tin người dùng';

const UserFormInfo: React.FC<UserFormInfoProps> = ({ control, setValue }) => {
  return (
    <Card>
      <CardHeader title={TITLE} />
      <CardContent className='grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2'>
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Tên người dùng'
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
              required
            />
          )}
        />
        <Controller
          control={control}
          name='phone'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Số điện thoại'
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='province'
          render={({ field: { value, onChange } }) => (
            <AdministrativeField
              control={control}
              label='Tỉnh/Thành phố'
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
              label='Quận/Huyện'
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
              label='Xã/Phường'
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
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Địa chỉ'
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default UserFormInfo;
