import { Type } from 'class-transformer';
import { IsEmail, Matches, ValidateIf } from 'class-validator';
import 'reflect-metadata';

import { AdministrativeUnit } from '@/models/administrative-unit';
import { Image } from '@/models/image';

export class Merchant {
  id: string;

  code: string;

  name: string;

  @Matches(/[\s\\+-;\b|]/, { message: 'Số điện thoại không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  phone: string;

  @IsEmail(undefined, { message: 'Email không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  email: string;

  address: string;

  @Type(() => AdministrativeUnit)
  province: AdministrativeUnit;

  @Type(() => AdministrativeUnit)
  district: AdministrativeUnit;

  @Type(() => AdministrativeUnit)
  commune: AdministrativeUnit;

  @Type(() => Image)
  logo: Image;
}
