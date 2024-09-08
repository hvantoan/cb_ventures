import { Type } from 'class-transformer';
import { Matches, MaxLength, MinLength, ValidateIf } from 'class-validator';

import { Permission } from './permission';

export class Role {
  public id: string;

  @ValidateIf((_, value) => value?.length > 0)
  @MaxLength(50, { message: 'Mã quyền truy cập dài không quá 50 ký tự.' })
  @Matches(/^[a-zA-Z0-9.\-_]+$/, {
    message: 'Mã quyền truy cập chỉ cho phép: chữ cái, số, gạch ngang, gạch dưới và dấu chấm.'
  })
  public code: string = '';

  @MaxLength(255, { message: 'Tên quyền truy cập dài không quá 255 ký tự.' })
  @MinLength(1, { message: 'Tên quyền truy cập không được để trống.' })
  public name: string = '';

  @Type(() => Permission)
  public permissions: Array<Permission>;
}
