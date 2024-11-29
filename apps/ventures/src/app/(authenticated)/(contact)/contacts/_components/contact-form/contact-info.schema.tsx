import { type ExtendedControllerProps } from '@hvantoan/ui/base';
import { Contact } from '@modules/(contact)/_model/contact';
import { TextField } from '@mui/material';

import PhoneField from '@/components/phone-field';

export const fields: Array<ExtendedControllerProps<Contact>> = [
  {
    name: 'name',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-12 md:col-span-4'
        label='Tên liên hệ'
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
    name: 'phone',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <PhoneField
        value={value ?? ''}
        onChange={onChange}
        label='Số điện thoại'
        className='col-span-12 md:col-span-6'
        error={Boolean(error)}
        helperText={error?.message}
      />
    )
  },
  {
    name: 'email',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-12 md:col-span-6'
        label='Email'
        onChange={onChange}
        value={value ?? ''}
        InputLabelProps={{ shrink: true }}
        helperText={error?.message}
      />
    )
  }
];
