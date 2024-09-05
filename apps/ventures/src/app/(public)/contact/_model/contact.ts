import { Type } from 'class-transformer';
import { IsEmail, Matches, ValidateIf, IsNotEmpty } from 'class-validator';
import 'reflect-metadata';

import { Image } from '@/models/image';

export class Contact {
  id: string;

  name: string;

  @Matches(/[\s\\+-;\b|]/, { message: 'Số điện thoại không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  phone: string;

  @IsEmail(undefined, { message: 'Email không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  email: string;

  @IsNotEmpty({ message: 'CMND/CCCD không được để trống.' })
  identityCard: string;

  @IsNotEmpty({ message: 'STK không được để trống.' })
  bankAccount: string;

  @IsNotEmpty({ message: 'Tên ngân hàng không được để trống.' })
  bankName: string;

  @IsNotEmpty({ message: 'Chi nhánh không được để trống.' })
  bankBranch: string;

  botId?: string;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh CMND/CCCD mặt trước không được để trống.' })
  frontIdentityCard: Image;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh CMND/CCCD mặt sau không được để trống.' })
  backIdentityCard: Image;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh thẻ ngân hàng mặt trước không được để trống.' })
  frontBankCard: Image;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh thẻ ngân hàng mặt sau không được để trống.' })
  backBankCard: Image;
}
