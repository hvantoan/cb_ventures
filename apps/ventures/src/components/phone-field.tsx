import { DialogHeader } from '@hvantoan/ui/components';
import { useToggle } from '@hvantoan/utilities/hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
  TextFieldProps,
  Typography
} from '@mui/material';

const DIALOG_TITLE = 'Hướng dẫn';

const CONTENT = 'Bạn có thể nhập một hoặc nhiều số điện thoại cho một khách hàng như sau:';
const examples = [
  '0123 456 789',
  '0123.456.789',
  '0123-456-789',
  '0123 456 789 ; 0123.456.780',
  '0123 456 789 / 0123.456.780',
  '0123 456 789 - 0123.456.780',
  '0123 456 789 | 0123.456.780'
];
const CLOSE_BUTTON_LABEL = 'Đồng ý';

const PhoneField: React.FC<TextFieldProps> = (props) => {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <>
      <TextField
        {...props}
        InputProps={{
          ...props.InputProps,
          endAdornment: (
            <IconButton color='primary' onClick={handleOpen}>
              <span className='i-solar-question-square-bold-duotone h-6 w-6' />
            </IconButton>
          )
        }}
      />
      <Dialog open={isOpen}>
        <DialogHeader onClose={handleClose} title={DIALOG_TITLE} />
        <DialogContent>
          <Typography>{CONTENT}</Typography>
          <ul>
            {examples.map((example) => (
              <Typography component='li' variant='body2' key={example}>
                {example}
              </Typography>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            {CLOSE_BUTTON_LABEL}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PhoneField;
