export const currencyChar = ' $';
export const currencyFormatter = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' });
export const numericFormatter = new Intl.NumberFormat('en-US');
export const thousandSeparator = ',';
export const toCurrency = (value: number) => `${currencyFormatter.format(value)}${currencyChar}`;
