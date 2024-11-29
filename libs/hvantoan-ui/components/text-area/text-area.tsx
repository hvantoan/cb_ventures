'use client';

import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import { forwardRef } from 'react';

const TextArea = forwardRef<HTMLDivElement, TextFieldProps>(({ helperText, ...props }, ref) => {
  return (
    <TextField
      ref={ref}
      {...props}
      helperText={
        <div className='flex w-full items-center justify-between gap-2'>
          <span className='flex-grow overflow-hidden truncate'>{helperText}</span>
          {props?.InputProps?.inputProps?.maxLength > 0 && (
            <span>
              {(props?.value as string)?.length ?? 0}/{props?.InputProps?.inputProps?.maxLength}
            </span>
          )}
        </div>
      }
    />
  );
});

export default TextArea;
