import { Type } from 'class-transformer';
import { IsDefined, IsEmail, Matches, ValidateIf } from 'class-validator';
import 'reflect-metadata';

import { Image } from '@/models/image';

import { BankCard } from './bank-card';

export class Contact {
  id: string;

  bankCardId: string;

  @IsDefined({ message: 'Tên không được để trống.' })
  name: string = '';

  @Matches(/[\s\\+-;\b|]/, { message: 'Số điện thoại không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  phone: string = '';

  @IsEmail(undefined, { message: 'Email không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  email: string = '';

  @IsDefined({ message: 'CMND/CCCD không được để trống.' })
  identityCard: string = '';

  botId?: string;

  @Type(() => Image)
  @IsDefined({ message: 'Ảnh CMND/CCCD mặt trước không được để trống.' })
  frontIdentityCard: Image;

  @Type(() => Image)
  @IsDefined({ message: 'Ảnh CMND/CCCD mặt sau không được để trống.' })
  backIdentityCard: Image;

  @Type(() => BankCard)
  @IsDefined({ message: 'Thông tin thẻ ngân hàng không được để trống.' })
  bankCard: BankCard;
}
