import type { TextFieldProps } from '@mui/material/TextField';
import { GridDefaultBreakpoints } from '@mui/system';
import type { DatePickerProps, DateTimePickerProps } from '@mui/x-date-pickers';
import type { Dayjs } from 'dayjs';
import React from 'react';
import type {
  Control,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseFormSetValue,
  UseFormStateReturn
} from 'react-hook-form';
import type { AnySchema } from 'yup';

export type BaseFieldProps = Omit<TextFieldProps, 'onChange' | 'value'> &
  Omit<DatePickerProps<Dayjs>, 'value' | 'onChange'> &
  Omit<DateTimePickerProps<Dayjs>, 'value' | 'onChange'> & {
    onChange?: ControllerRenderProps['onChange'];
    value?: any;
    disableClearable?: boolean;
  } & Record<string, any>;

export interface BaseField<TName extends string = string, TProps = BaseFieldProps> {
  name: TName;
  Component: React.FC<TProps>;
  componentProps: TProps;
  gridProps?: GridDefaultBreakpoints & { className?: string };
  group?: string;
}

export type BaseSchema<T> = Record<keyof T, AnySchema>;

export type ExtendedControllerProps<
  T extends FieldValues = FieldValues,
  TName extends FieldPath<T> = FieldPath<T>
> = Omit<ControllerProps<T, TName>, 'render'> & {
  render: ({
    field,
    fieldState,
    formState
  }: {
    field: ControllerRenderProps<T, ExtendedControllerProps<T, TName>['name']>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
    control?: Control<T>;
    setValue?: UseFormSetValue<T>;
    index?: number;
    name?: TName;
  }) => React.ReactElement;
};
