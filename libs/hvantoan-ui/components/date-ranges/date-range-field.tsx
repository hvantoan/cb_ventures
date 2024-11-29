'use client';

import { TextFieldProps } from '@mui/material';
import { useCallback } from 'react';
import { Control, useController } from 'react-hook-form';

import DateRangePicker from './date-range-picker';

/**
 * Use with `react-hook-form`
 * @returns {any}
 * @constructor
 */

interface DateRangeFieldProps extends Omit<TextFieldProps, 'value'> {
  control: Control<any>;
  startDateName: string;
  endDateName: string;
}

const DateRangeField: React.FC<DateRangeFieldProps> = ({ control, endDateName, startDateName, ...props }) => {
  const startDateController = useController({ control, name: startDateName });
  const endDateController = useController({ control, name: endDateName });

  const handleChange = useCallback(([startDate, endDate]: [Date?, Date?]) => {
    startDateController.field.onChange(startDate);
    endDateController.field.onChange(endDate);
  }, []);

  return (
    <DateRangePicker
      {...props}
      endDate={endDateController?.field.value}
      startDate={startDateController.field.value}
      onChange={handleChange}
    />
  );
};

export default DateRangeField;
