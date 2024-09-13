import { type ExtendedControllerProps } from '@fumy/ui/base';
import { Transaction } from '@modules/(services)/_models';
import { NumericField } from '@modules/_components/numeric-fields';

export const fields: Array<ExtendedControllerProps<Transaction>> = [
  {
    name: 'amount',
    render: ({ field: { onChange, value }, fieldState: { error } }) => (
      <NumericField
        className='col-span-12'
        label='Số tiền'
        onValueChange={(values) => onChange(values.floatValue)}
        value={value as number}
        error={Boolean(error)}
        helperText={error?.message}
        min={0}
        required
      />
    )
  }
];
