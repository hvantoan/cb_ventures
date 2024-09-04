import { BaseNumericField, BaseNumericFieldProps } from '@fumy/ui/components';
import { currencyChar } from '@fumy/utilities/helpers/number-formatter';

import { useAppSelector } from '@/store';

const CurrencyField: React.FC<BaseNumericFieldProps> = (props) => {
  const numberFormat = useAppSelector((state) => state.globalConfig.numberFormat);

  return (
    <BaseNumericField
      suffix={currencyChar}
      {...props}
      decimalScale={numberFormat.numberDecimalDigitsForCurrency}
      decimalSeparator={numberFormat.decimalSeparator}
      fixedDecimalScale
      thousandSeparator={numberFormat.thousandsSeparator}
    />
  );
};

export default CurrencyField;
