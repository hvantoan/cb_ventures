'use client';

import { Role } from '@modules/(setting)/settings/role/_models/role';
import { useQueryAllRoles } from '@modules/(setting)/settings/role/_queries/use-query-all-roles';
import { Autocomplete, AutocompleteProps, TextField, TextFieldProps } from '@mui/material';
import type { ChipTypeMap } from '@mui/material/Chip';
import { useCallback } from 'react';

export interface RoleSelectProps<
  Value = Role,
  Multiple extends boolean | undefined = boolean,
  DisableClearable extends boolean | undefined = boolean,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
> extends Omit<
      AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
      'options' | 'renderInput' | 'onChange' | 'value'
    >,
    Pick<TextFieldProps, 'label' | 'placeholder' | 'variant' | 'size'> {
  onChange?: (value?: Array<Role> | Role | null) => void;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  value?: Role | Array<Role> | string | null;
}

const getOptionLabelDefault = (option?: Role) => {
  return option?.name ?? '';
};

const isOptionEqualToValue = (option: Role, value: Role) => option?.id === value?.id ?? Boolean(value.id);
/**
 * @param size
 * @param variant
 * @param label
 * @param  onChange - Callback when the value changes - should memoize this function
 */
const RoleSelect: React.FC<RoleSelectProps> = ({
  size = 'small',
  variant = 'outlined',
  label,
  onChange,
  error,
  value,
  helperText,
  required,
  placeholder,
  getOptionLabel = getOptionLabelDefault,
  ...props
}) => {
  const { data: roles, isFetching } = useQueryAllRoles();

  const handleChange = useCallback((_: React.SyntheticEvent, newValue: Role | Array<Role> | null) => {
    onChange?.(newValue);
  }, []);

  const displayValue = typeof value === 'string' ? roles?.find((item) => item.id === value) : value;

  return (
    <Autocomplete
      {...props}
      options={roles || []}
      getOptionKey={(option) => option.id}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={getOptionLabel}
      value={displayValue}
      renderInput={(params) => (
        <TextField
          {...params}
          size={size}
          label={label}
          variant={variant}
          error={error}
          helperText={helperText}
          required={required}
          placeholder={placeholder}
        />
      )}
      onChange={handleChange}
      loading={isFetching}
      componentsProps={{
        paper: {
          className: 'min-w-52'
        }
      }}
    />
  );
};

export default RoleSelect;
