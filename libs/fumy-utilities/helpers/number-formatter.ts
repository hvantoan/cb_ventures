export const currencyChar = ' ₫';
export const currencyFormatter = new Intl.NumberFormat('ar-AE', { currency: 'VND', style: 'currency' });
export const numericFormatter = new Intl.NumberFormat('vi-VN');
export const thousandSeparator = ',';
export const toCurrency = (value: number) => `${currencyFormatter.format(value)}${currencyChar}`;
