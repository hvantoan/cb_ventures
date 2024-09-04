export class NumberFormat {
  public decimalSeparator: string = '.';
  public thousandsSeparator: string = ',';
  public numberDecimalDigitsForCurrency: number = 0;
  public numberDecimalDigitsForQuantity: number = 0;

  public static getDefault = (): NumberFormat => ({
    decimalSeparator: '.',
    thousandsSeparator: ',',
    numberDecimalDigitsForCurrency: 0,
    numberDecimalDigitsForQuantity: 0
  });
}
