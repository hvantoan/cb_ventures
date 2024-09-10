import { Stack, Typography } from '@mui/material';
import clsx from 'clsx';

interface BotFieldProps {
  label: string;
  value: string;
  isDescription?: boolean;
}

const BotField: React.FC<BotFieldProps> = ({ label, value, isDescription = false }) => {
  return (
    <Stack direction='row' spacing={0.5}>
      <Typography color='text.secondary' width={200} className='shrink-0'>
        {label}
      </Typography>
      <Typography
        component='span'
        className={clsx({
          'max-h-[250px] overflow-scroll whitespace-pre-line': isDescription
        })}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default BotField;
