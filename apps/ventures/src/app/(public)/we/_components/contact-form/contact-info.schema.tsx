import { type ExtendedControllerProps } from '@fumy/ui/base';
import { TextField } from '@mui/material';

import PhoneField from '@/components/phone-field';

import { Contact } from '../../_model/contact';

export const fields: Array<ExtendedControllerProps<Contact>> = [
  {
    name: 'name',
    render: ({ field: { onChange, value }, fieldState: { error } }) => {
      return (
        <TextField
          className='col-span-12'
          label='Tên liên hệ'
          onChange={onChange}
          value={value}
          InputLabelProps={{ shrink: true }}
          error={Boolean(error)}
          helperText={error?.message}
          required
        />
      );
    }
  },
  {
    name: 'phone',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <PhoneField
        value={value ?? ''}
        onChange={onChange}
        label='Số điện thoại'
        className='col-span-12'
        error={Boolean(error)}
        helperText={error?.message}
        required
      />
    )
  },
  {
    name: 'email',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-12'
        label='Email'
        onChange={onChange}
        value={value ?? ''}
        InputLabelProps={{ shrink: true }}
        error={Boolean(error)}
        helperText={error?.message}
        required
      />
    )
  },
  {
    name: 'identityCard',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-12'
        label='CMND/CCCD'
        onChange={onChange}
        value={value ?? ''}
        InputLabelProps={{ shrink: true }}
        error={Boolean(error)}
        helperText={error?.message}
        required
      />
    )
  }
];
