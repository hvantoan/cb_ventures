import { BaseNumericField, BaseNumericFieldProps } from '@fumy/ui/components';

import { useAppSelector } from '@/store';

const NumericField: React.FC<BaseNumericFieldProps> = (props) => {
  const numberFormat = useAppSelector((state) => state.globalConfig.numberFormat);

  return (
    <BaseNumericField
      decimalScale={0}
      {...props}
      decimalSeparator={numberFormat.decimalSeparator}
      fixedDecimalScale
      thousandSeparator={numberFormat.thousandsSeparator}
    />
  );
};

export default NumericField;
