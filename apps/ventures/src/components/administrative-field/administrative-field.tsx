import { Autocomplete, type AutocompleteProps, TextField, type TextFieldProps } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { type Control, type SetFieldValue, useWatch } from 'react-hook-form';

import type { AdministrativeUnit } from '@/models/administrative-unit';
import { useQueryAdministrativeUnits } from '@/query/shared/use-query-administrative-units';

export type AdministrativeFieldProps = Partial<AutocompleteProps<AdministrativeUnit, false, boolean, false>> & {
  control?: Control<any>;
  unitType?: 'commune' | 'district' | 'province';
  setValue?: SetFieldValue<any>;
  baseName?: string;
  value?: AdministrativeUnit | null;
  readOnly?: boolean;
  InputProps?: TextFieldProps['InputProps'];
  label?: string;
  placeholder?: string;
  onChange?: (value: AdministrativeUnit | null) => void;
};

const isOptionEqualToValue = (option: AdministrativeUnit, value: AdministrativeUnit) => option.code === value.code;

const AdministrativeField: React.FC<AdministrativeFieldProps> = ({
  control,
  label,
  placeholder,
  onChange = () => {},
  unitType,
  baseName,
  setValue,
  InputProps,
  ...props
}) => {
  const base = baseName ? `${baseName}.` : '';
  const watchFieldNames = useMemo(() => {
    if (unitType === 'commune') return [`${base}province`, `${base}district`];
    if (unitType === 'district') return [`${base}province`];
    return [];
  }, [unitType, base]);

  const watchFields = useWatch({
    control,
    name: watchFieldNames
  });

  const { data } = useQueryAdministrativeUnits(watchFields);

  const getOptionLabel = useCallback((option: AdministrativeUnit) => option?.name, []);

  const handleSelect = useCallback(
    (_: React.SyntheticEvent, newValue: AdministrativeUnit | null) => {
      onChange(newValue);
      if (unitType === 'province') {
        setValue(`${base}district`, null as never);
        setValue(`${base}commune`, null as never);
      }
      if (unitType === 'district') {
        setValue(`${base}commune`, null as never);
      }
    },
    [base, unitType]
  );

  return (
    <Autocomplete
      getOptionLabel={getOptionLabel}
      {...props}
      options={data?.data || []}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{ ...params.InputProps, ...InputProps }}
          label={label}
          placeholder={placeholder}
        />
      )}
      onChange={handleSelect}
      disabled={
        props.disabled || (unitType === 'district' && !watchFields[0]) || (unitType === 'commune' && !watchFields[1])
      }
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default AdministrativeField;
