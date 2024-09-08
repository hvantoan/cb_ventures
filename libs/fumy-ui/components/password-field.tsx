import { useToggle } from '@fumy/utilities/hooks';
import { IconButton, TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField';

const PasswordInput: React.FC<TextFieldProps> = (props) => {
  const { isOpen, toggle } = useToggle();

  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <IconButton onClick={toggle} size='small' className='!p-1'>
            {isOpen ? <span className='i-iconamoon-eye-off-duotone' /> : <span className='i-iconamoon-eye-duotone' />}
          </IconButton>
        )
      }}
      type={isOpen ? 'text' : 'password'}
    />
  );
};

export default PasswordInput;
