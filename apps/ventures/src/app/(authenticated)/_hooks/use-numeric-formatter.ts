'use client';

import { useMemo } from 'react';

import { useAppSelector } from '@/store';

export const useCurrencyFormat = () => {
  const numberFormat = useAppSelector((state) => state.globalConfig.numberFormat);

  return useMemo(() => {
    return Intl.NumberFormat(numberFormat?.thousandsSeparator === ',' ? 'ar' : 'vi-VN', {
      currency: 'VND',
      style: 'currency',
      minimumFractionDigits: numberFormat.numberDecimalDigitsForCurrency,
      maximumFractionDigits: numberFormat.numberDecimalDigitsForQuantity
    });
  }, [numberFormat?.numberDecimalDigitsForQuantity, numberFormat?.decimalSeparator, numberFormat.thousandsSeparator]);
};

export const useQuantityFormat = () => {
  const numberFormat = useAppSelector((state) => state.globalConfig.numberFormat);

  return useMemo(() => {
    return Intl.NumberFormat(numberFormat?.thousandsSeparator === ',' ? 'ar' : 'vi-VN', {
      minimumFractionDigits: numberFormat.numberDecimalDigitsForCurrency,
      maximumFractionDigits: numberFormat.numberDecimalDigitsForQuantity,
      style: 'decimal'
    });
  }, [numberFormat?.numberDecimalDigitsForQuantity, numberFormat?.decimalSeparator, numberFormat.thousandsSeparator]);
};
