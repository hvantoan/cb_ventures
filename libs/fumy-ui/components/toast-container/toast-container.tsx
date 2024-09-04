'use client';

import CloseIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton } from '@mui/material';
import React, { MouseEvent } from 'react';
import { ToastContainer as BaseToastContainer, ToastContainerProps } from 'react-toastify';

import { StyledToastContainer } from './toast-container.styles';

const CloseButton = ({ closeToast }: { closeToast: (e: MouseEvent<HTMLElement>) => void }) => {
  return (
    <Box className='close-box'>
      <IconButton size='small' onClick={closeToast}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </Box>
  );
};

const ToastContainer = ({ theme, ...props }: ToastContainerProps) => {
  return (
    <StyledToastContainer>
      <BaseToastContainer position='top-right' {...props} closeButton={CloseButton} />
    </StyledToastContainer>
  );
};

export default ToastContainer;
