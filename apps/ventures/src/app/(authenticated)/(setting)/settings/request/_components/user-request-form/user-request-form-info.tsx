'use client';

import { TextArea } from '@fumy/ui/components';
import { Card, CardContent, MenuItem, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

import { ERequestStatusLabel } from '../../_enums/request-status';
import { ERequestType } from '../../_enums/request-type';
import { UserRequest } from '../../_models/user-request';

interface UserRequestFormInfoProps {
  control: Control<UserRequest>;
  isNew: boolean;
}

const DEFAULT_CODE_HELP_TEXT = '(Tự động tạo khi để trống)';

const UserRequestFormInfo: React.FC<UserRequestFormInfoProps> = ({ control, isNew }) => {
  return (
    <Card>
      <CardContent className='grid grid-cols-1 gap-4 gap-y-6 md:grid-cols-3'>
        <Controller
          control={control}
          name='code'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Mã yêu cầu'
              fullWidth
              value={value ?? ''}
              onChange={onChange}
              error={Boolean(error)}
              InputProps={{
                readOnly: !isNew
              }}
              helperText={(error?.message ?? isNew) ? DEFAULT_CODE_HELP_TEXT : ''}
            />
          )}
        />
        <Controller
          control={control}
          name='type'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label='Loại'
              fullWidth
              required
              value={value}
              onChange={onChange}
              error={Boolean(error)}
              InputProps={{
                readOnly: !isNew
              }}
              select
            >
              <MenuItem value={ERequestType.MergeCustomer}>Gộp khách hàng</MenuItem>
            </TextField>
          )}
        />
        <Controller
          control={control}
          name='status'
          render={({ field: { value } }) => (
            <TextField
              label='Trạng thái'
              fullWidth
              value={ERequestStatusLabel[value] ?? ''}
              InputProps={{
                readOnly: true
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='createdName'
          render={({ field: { value } }) => (
            <TextField
              label='Người tạo'
              fullWidth
              value={value ?? ''}
              InputProps={{
                readOnly: true
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='progressName'
          render={({ field: { value } }) => (
            <TextField
              label='Người thực hiện'
              fullWidth
              value={value ?? ''}
              InputProps={{
                readOnly: true
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='revokeName'
          render={({ field: { value } }) => (
            <TextField
              label='Người hoàn tác'
              fullWidth
              value={value ?? ''}
              InputProps={{
                readOnly: true
              }}
            />
          )}
        />
        <Controller
          control={control}
          name='content'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextArea
              label='Nội dung'
              multiline
              value={value}
              className='col-span-3'
              minRows={3}
              maxRows={5}
              placeholder='Nhập lý do giảm giá'
              onChange={onChange}
              error={Boolean(error)}
              helperText={error?.message}
              InputProps={{
                inputProps: { maxLength: 2000 }
              }}
            />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default UserRequestFormInfo;
