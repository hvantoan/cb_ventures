import { DialogTitle, IconButton } from '@mui/material';
import { clsx } from 'clsx';

interface DialogHeaderProps {
  onClose: () => void;
  title: string;
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ onClose, title }) => {
  return (
    <DialogTitle component='div' className='flex w-full justify-between gap-2'>
      <span className='flex-grow whitespace-pre-wrap'>{title}</span>
      <IconButton onClick={onClose} className='h-fit !p-0'>
        <span className={clsx('i-solar-close-circle-bold-duotone text-text-disabled h-6 w-6', 'md:h-8 md:w-8')} />
      </IconButton>
    </DialogTitle>
  );
};

export default DialogHeader;
