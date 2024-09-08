'use client';

import { Role } from '@modules/(setting)/settings/role/_models/role';
import { Card, CardContent, CardHeader, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface RoleFormInfoProps {
  control: Control<Role>;
  roleId?: string;
}

const TITLE = 'Thông tin phân quyền';
const CODE_HELPER_TEXT = '(Tự động tạo khi để trống)';

const RoleFormInfo: React.FC<RoleFormInfoProps> = ({ control, roleId }) => {
  return (
    <Card className='h-fit min-w-72'>
      <CardHeader title={TITLE} />
      <CardContent className='flex flex-col gap-4'>
        <Controller
          control={control}
          name='code'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Mã phân quyền'
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              helperText={(error?.message ?? !roleId) ? CODE_HELPER_TEXT : ''}
            />
          )}
        />
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Tên phân quyền'
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
              required
            />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default RoleFormInfo;
