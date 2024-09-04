'use client';

import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { useAppSelector } from '@/store';

const CURRENCY_SUFFIX = ' ₫';

const CurrencyDisplay: React.FC<NumericFormatProps> = (props) => {
  const numberFormat = useAppSelector((state) => state.globalConfig.numberFormat);

  return (
    <NumericFormat
      thousandSeparator={numberFormat.thousandsSeparator}
      decimalSeparator={numberFormat.decimalSeparator}
      decimalScale={numberFormat.numberDecimalDigitsForCurrency}
      fixedDecimalScale
      suffix={CURRENCY_SUFFIX}
      {...props}
      displayType='text'
    />
  );
};

export default CurrencyDisplay;
