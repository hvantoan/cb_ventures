import { type ExtendedControllerProps } from '@fumy/ui/base';
import { Bot } from '@modules/(category)/_models/bot';
import BotSelect from '@modules/(category)/bots/_components/bot-select/bot-select';
import { Server } from '@modules/(services)/_models/server';
import { UserSelect } from '@modules/(setting)/settings/users/_components/user-select';
import { User } from '@modules/(setting)/settings/users/_models/user';
import { NumericField } from '@modules/_components/numeric-fields';
import { TextField } from '@mui/material';
import { useWatch } from 'react-hook-form';

export const fields: Array<ExtendedControllerProps<Server>> = [
  {
    name: 'iD_MT4',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <NumericField
        className='col-span-6'
        label='ID MT4'
        onValueChange={(values) => onChange(values.floatValue)}
        value={value as number}
        error={Boolean(error)}
        helperText={error?.message}
        required
        min={0}
      />
    )
  },
  {
    name: 'brokerServer',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-6'
        label='Broker Server'
        onChange={onChange}
        value={value}
        InputLabelProps={{ shrink: true }}
        error={Boolean(error)}
        helperText={error?.message}
        required
      />
    )
  },
  {
    name: 'user',
    render: ({ field: { onChange, value }, fieldState: { error }, control }) => {
      const id = useWatch({ control, name: 'id' });
      return (
        <UserSelect
          className='col-span-6'
          label='Người dùng'
          onChange={onChange}
          value={(value as User) ?? null}
          variant='outlined'
          size='medium'
          error={Boolean(error)}
          helperText={error?.message}
          readOnly={Boolean(id)}
          required
        />
      );
    }
  },
  {
    name: 'bot',
    render: ({ field: { onChange, value }, fieldState: { error }, control }) => {
      const id = useWatch({ control, name: 'id' });
      return (
        <BotSelect
          className='col-span-6'
          label='BOT'
          onChange={onChange}
          value={(value as Bot) ?? null}
          size='medium'
          variant='outlined'
          error={Boolean(error)}
          readOnly={Boolean(id)}
          helperText={error?.message}
        />
      );
    }
  },

  {
    name: 'passView',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-6'
        label='Password View'
        onChange={onChange}
        value={value}
        InputLabelProps={{ shrink: true }}
        error={Boolean(error)}
        helperText={error?.message}
      />
    )
  },
  {
    name: 'passWeb',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-6'
        label='Password Web'
        onChange={onChange}
        value={value}
        InputLabelProps={{ shrink: true }}
        error={Boolean(error)}
        helperText={error?.message}
      />
    )
  },
  {
    name: 'ev',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <NumericField
        className='col-span-6'
        label='EV'
        onValueChange={(values) => onChange(values.floatValue)}
        value={value as number}
        error={Boolean(error)}
        helperText={error?.message}
        min={0}
        required
      />
    )
  },
  {
    name: 'ref',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <NumericField
        className='col-span-6'
        label='Ref'
        onValueChange={(values) => onChange(values.floatValue)}
        value={value as number}
        error={Boolean(error)}
        helperText={error?.message}
        required
        min={0}
      />
    )
  },
  {
    name: 'balance',
    render: ({ field: { onChange, value }, fieldState: { error }, control }) => {
      const id = useWatch({ control, name: 'id' });
      return (
        <NumericField
          className='col-span-6'
          label='Tổng vốn'
          readOnly={Boolean(id)}
          onValueChange={(values) => onChange(values.floatValue)}
          value={value as number}
          error={Boolean(error)}
          helperText={error?.message}
          min={0}
          required
        />
      );
    }
  }
];
