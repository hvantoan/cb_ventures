'use client';

import { useToggle } from '@fumy/utilities/hooks';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { toast, ToastItem } from 'react-toastify';

import { FORM_ID } from '../../constants';

const SUBMIT_LABEL = 'Lưu';

const SubmitUserFormButton: React.FC = () => {
  const { isOpen: isSubmitting, handleOpen: openLoading, handleClose: closeLoading } = useToggle();

  useEffect(() => {
    const callback = (item: ToastItem) => {
      if (item.status === 'added' && item.type === 'default') {
        openLoading();
      } else {
        closeLoading();
      }
    };
    toast.onChange(callback);
    return () => {
      toast.onChange(() => {});
    };
  }, []);

  return (
    <Button type='submit' className='w-32' form={FORM_ID} disabled={isSubmitting}>
      {SUBMIT_LABEL}
    </Button>
  );
};

export default SubmitUserFormButton;
