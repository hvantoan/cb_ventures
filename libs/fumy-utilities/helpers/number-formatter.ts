export const currencyChar = ' $';
export const currencyFormatter = new Intl.NumberFormat('de-DE');
export const numericFormatter = new Intl.NumberFormat('de-DE');
export const thousandSeparator = ',';
export const toCurrency = (value: number) => `${currencyFormatter.format(value)}${currencyChar}`;
