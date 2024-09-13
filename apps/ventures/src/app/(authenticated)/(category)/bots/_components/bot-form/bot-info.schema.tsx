import { type ExtendedControllerProps } from '@fumy/ui/base';
import { TextArea } from '@fumy/ui/components';
import { Bot } from '@modules/(category)/_models/bot';
import { TextField } from '@mui/material';

const CHARACTER_LIMIT = 2000;

export const fields: Array<ExtendedControllerProps<Bot>> = [
  {
    name: 'name',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <TextField
        className='col-span-12'
        label='Tên bot'
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
    name: 'description',
    render: ({ field: { onChange, value } }) => {
      return (
        <TextArea
          className='col-span-12'
          label='Mô tả'
          multiline
          value={value}
          minRows={3}
          maxRows={5}
          onChange={onChange}
          InputProps={{
            inputProps: { maxLength: CHARACTER_LIMIT }
          }}
        />
      );
    }
  }
];
