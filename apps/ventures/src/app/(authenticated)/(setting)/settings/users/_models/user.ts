import { Role } from '@modules/(setting)/settings/role/_models/role';
import { Type } from 'class-transformer';
import { IsDefined, IsEmail, Matches, MaxLength, MinLength, ValidateIf } from 'class-validator';
import { Nullable } from 'class-validator-extended';
import 'reflect-metadata';

import { BankCard } from '@/app/(public)/we/_model/bank-card';
import { AdministrativeUnit } from '@/models/administrative-unit';

export class User {
  public id: string = '';

  @IsDefined({ message: 'Tên đăng nhập không được để trống.' })
  @MaxLength(50, { message: 'Tên đăng nhập dài không quá 50 ký tự.' })
  @Matches(/^[a-zA-Z0-9.\-_]+$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
    message: 'Tên đăng nhập hoặc email không hợp lệ. Chỉ chứa chữ cái, số và ký tự đặc biệt.'
  })
  @MinLength(2, { message: 'Tên đăng nhập không ngắn hơn 2 ký tự.' })
  public username: string;

  @MaxLength(50, { message: 'Mã khách hàng dài không quá 50 ký tự.' })
  @Matches(/^[a-zA-Z0-9.\-_]+$/, { message: 'Mã khách hàng không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  public code: string = '';

  @IsDefined({ message: 'Tên khách hàng không được để trống.' })
  @MaxLength(255, { message: 'Tên khách hàng dài không quá 255 ký tự.' })
  public name: string;

  @Matches(/[\d\s,.\\/+-;\b|]*/, { message: 'Số điện thoại không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  public phone: string = '';

  @IsEmail(undefined, { message: 'Email không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  public email: string = '';

  public identityCard: string;

  @Type(() => AdministrativeUnit)
  public province: AdministrativeUnit;

  @Type(() => AdministrativeUnit)
  public district: AdministrativeUnit;

  @Type(() => AdministrativeUnit)
  public commune: AdministrativeUnit;

  @MaxLength(255, { message: 'Địa chỉ dài không quá 255 ký tự.' })
  @Nullable()
  public address: string = '';

  public isActive: boolean = true;

  public isAdmin: boolean = false;

  @Type(() => Role)
  @IsDefined({ message: 'Vui lòng chọn quyền truy cập.' })
  public role: Role;

  @Type(() => Array<BankCard>)
  public bankCard: BankCard[];
}
