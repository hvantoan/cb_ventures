import { NumberFormat } from './number-format';

export class GlobalConfig {
  public numberFormat: NumberFormat;

  public static getDefault = (): GlobalConfig => ({
    numberFormat: NumberFormat.getDefault()
  });
}
