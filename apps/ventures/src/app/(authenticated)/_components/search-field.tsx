import { debounce, IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import { useCallback, useState } from 'react';

const DEBOUNCE_TIME = 300;

export const SearchField: React.FC<TextFieldProps> = ({ onChange, ...props }) => {
  const [localValue, setLocalValue] = useState(props.value);

  const changeToRoot = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    }, DEBOUNCE_TIME),
    []
  );

  const debouncedOnChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setLocalValue(e.target.value);
    changeToRoot(e);
  }, []);

  const handleClear = useCallback(() => {
    setLocalValue('');
    onChange?.({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  }, []);

  return (
    <TextField
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton size='small' onClick={handleClear} className='p-0.5' disabled={!localValue}>
              <span className='i-solar-close-circle-bold-duotone h-5 w-5' />
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
      value={localValue}
      onChange={debouncedOnChange}
    />
  );
};
