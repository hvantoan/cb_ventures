'use client';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { confirmable, ConfirmDialogProps } from 'react-confirm';

export interface ConfirmDialogExtendedProps {
  cancelText?: string;
  confirmText?: string;
  description: React.ReactNode;
  title: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps<ConfirmDialogExtendedProps, boolean>> = ({
  cancelText = 'Không',
  confirmText = 'Có',
  description,
  proceed,
  title,
  show
}) => {
  return (
    <Dialog open={show} maxWidth='md'>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent className='whitespace-pre-wrap'>{description}</DialogContent>
      <DialogActions>
        <Button onClick={() => proceed(false)} variant='outlined'>
          {cancelText}
        </Button>
        <Button onClick={() => proceed(true)} color='error'>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default confirmable(ConfirmDialog);
