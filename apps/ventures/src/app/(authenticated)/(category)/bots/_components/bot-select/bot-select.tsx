'use client';

import { Bot } from '@modules/(category)/_models/bot';
import { useQueryAllBots } from '@modules/(category)/_queries/use-query-all-bots';
import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from '@mui/material';
import { ChipTypeMap } from '@mui/material/Chip';
import { useCallback } from 'react';

export interface BotSelectProps<
  Value = Bot,
  Multiple extends boolean | undefined = boolean,
  DisableClearable extends boolean | undefined = boolean,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<
      AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
      'options' | 'renderInput' | 'onChange' | 'value'
    >,
    Pick<TextFieldProps, 'label' | 'placeholder' | 'variant' | 'size' | 'required' | 'error' | 'helperText'> {
  onChange?: (value: Bot | Array<Bot> | null) => void;
  value: Bot | Array<Bot> | string | null;
  active?: boolean;
}

const isOptionEqualToValue = (option: Bot, value: Bot) => option?.id === value?.id;
const renderOption = (props: React.HTMLAttributes<HTMLLIElement>, option: Bot) => (
  <li {...props} key={option?.id}>
    {option?.name}
  </li>
);

/**
 * @param size
 * @param variant
 * @param label
 * @param  onChange - Callback when the value changes - should memoize this function
 */
const BotSelect: React.FC<BotSelectProps> = ({
  size = 'small',
  variant = 'standard',
  label,
  onChange,
  value,
  required = false,
  error = false,
  helperText,
  ...props
}) => {
  const { data, isFetching } = useQueryAllBots();

  const getOptionLabel = useCallback((option: Bot) => (option?.name ? option.name : ''), []);

  const handleChange = useCallback((_: React.SyntheticEvent, newValue: Bot | Array<Bot> | null) => {
    if (!onChange) return;
    onChange(newValue);
  }, []);

  const displayValue = typeof value === 'string' ? (data?.items.find((item) => item.id === value) ?? null) : value;

  return (
    <Autocomplete
      {...props}
      options={data?.items || []}
      getOptionKey={(option) => option.id}
      renderOption={renderOption}
      getOptionLabel={getOptionLabel}
      size={size}
      renderInput={(params) => (
        <TextField
          {...params}
          size={size}
          label={label}
          variant={variant}
          required={required}
          error={error}
          helperText={helperText}
        />
      )}
      onChange={handleChange}
      isOptionEqualToValue={isOptionEqualToValue}
      loading={isFetching}
      value={displayValue}
      componentsProps={{
        paper: {
          className: 'min-w-52'
        }
      }}
    />
  );
};

export default BotSelect;
