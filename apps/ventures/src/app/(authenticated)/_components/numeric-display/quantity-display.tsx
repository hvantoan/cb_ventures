'use client';

import { NumericFormat, NumericFormatProps } from 'react-number-format';

import { useAppSelector } from '@/store';

const QuantityDisplay: React.FC<NumericFormatProps> = (props) => {
  const numberFormat = useAppSelector((state) => state.globalConfig.numberFormat);

  return (
    <NumericFormat
      thousandSeparator={numberFormat.thousandsSeparator}
      decimalSeparator={numberFormat.decimalSeparator}
      decimalScale={numberFormat.numberDecimalDigitsForQuantity}
      fixedDecimalScale
      {...props}
      displayType='text'
    />
  );
};

export default QuantityDisplay;
