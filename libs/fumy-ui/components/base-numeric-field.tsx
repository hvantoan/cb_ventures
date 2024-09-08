import { IconButton, InputAdornment, TextField, type TextFieldProps } from '@mui/material';
import { NumericFormat, type NumericFormatProps, type SourceInfo } from 'react-number-format';

export interface BaseNumericFieldProps extends NumericFormatProps<Omit<TextFieldProps, 'inputProps'>> {
  showButtons?: boolean;
  value: number;
  min?: number;
  max?: number;
}

const NumericField: React.FC<BaseNumericFieldProps> = ({ showButtons = false, ...props }) => {
  const handleIncrement = () => {
    if (props?.onValueChange) {
      const value = (props.value ?? 0) + 1;
      props.onValueChange({ floatValue: value, value: value.toString(), formattedValue: value.toString() }, {
        source: 'event'
      } as SourceInfo);
    }
  };

  const handleDecrement = () => {
    if (props?.onValueChange) {
      const value = (props.value ?? 0) - 1;
      props.onValueChange({ floatValue: value, value: value.toString(), formattedValue: value.toString() }, {
        source: 'event'
      } as SourceInfo);
    }
  };

  return (
    <NumericFormat
      customInput={TextField}
      {...props}
      InputProps={{
        ...props.InputProps,
        endAdornment: showButtons ? (
          <InputAdornment position='end'>
            <div className='flex flex-col gap-0.5'>
              <IconButton
                size='small'
                className='!p-0.5'
                onClick={handleIncrement}
                disabled={(Number(props.value) ?? 1) >= (Number(props?.max) ?? 0)}
              >
                <span className='i-solar-alt-arrow-up-bold h-3 w-3' />
              </IconButton>
              <IconButton
                size='small'
                className='!p-0.5'
                onClick={handleDecrement}
                disabled={(Number(props.value) ?? 1) <= (Number(props?.min) ?? 0)}
              >
                <span className='i-solar-alt-arrow-down-bold h-3 w-3' />
              </IconButton>
            </div>
          </InputAdornment>
        ) : null,
        inputProps: {
          ...props.InputProps?.inputProps,
          className: 'text-right'
        }
      }}
    />
  );
};

export default NumericField;
