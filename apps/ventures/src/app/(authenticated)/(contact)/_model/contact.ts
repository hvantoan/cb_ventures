import { Type } from 'class-transformer';
import { IsEmail, Matches, ValidateIf, IsNotEmpty } from 'class-validator';
import 'reflect-metadata';

import { Image } from '@/models/image';

import { BankCard } from './bank-card';

export class Contact {
  id: string;

  bankCardId: string;

  name: string = '';

  @Matches(/[\s\\+-;\b|]/, { message: 'Số điện thoại không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  phone: string = '';

  @IsEmail(undefined, { message: 'Email không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  email: string = '';

  @IsNotEmpty({ message: 'CMND/CCCD không được để trống.' })
  identityCard: string = '';

  botId?: string;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh CMND/CCCD mặt trước không được để trống.' })
  frontIdentityCard: Image;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh CMND/CCCD mặt sau không được để trống.' })
  backIdentityCard: Image;

  @Type(() => BankCard)
  @IsNotEmpty({ message: 'Thông tin thẻ ngân hàng không được để trống.' })
  bankCard: BankCard;
}
