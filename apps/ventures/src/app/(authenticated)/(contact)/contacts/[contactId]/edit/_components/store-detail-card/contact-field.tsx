import { Stack, Typography } from '@mui/material';

interface StoreFieldProps {
  label: string;
  value?: string;
}

const ContactField: React.FC<StoreFieldProps> = ({ label, value }) => {
  return (
    <Stack direction='row' spacing={0.5}>
      <Typography color='text.secondary' width={200} className='shrink-0'>
        {label}
      </Typography>
      <Typography component='span'>{value ?? ''}</Typography>
    </Stack>
  );
};

export default ContactField;
