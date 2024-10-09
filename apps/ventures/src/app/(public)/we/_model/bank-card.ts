import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import 'reflect-metadata';

import { Image } from '@/models/image';

export class BankCard {
  id: string;
  userId: string;
  @IsNotEmpty({ message: 'STK không được để trống.' })
  cardNumber: string;
  @IsNotEmpty({ message: 'Chi nhánh không được để trống.' })
  cardBranch: string;
  @IsNotEmpty({ message: 'Tên không được để trống.' })
  name: string;

  cvv?: string;

  @IsNotEmpty({ message: 'Ngày hết hạn không được để trống.' })
  expirationDate: string;
  createdDate: Date;
  isDelete: boolean;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh thẻ ngân hàng mặt trước không được để trống.' })
  frontBankCard: Image;

  @Type(() => Image)
  @IsNotEmpty({ message: 'Ảnh thẻ ngân hàng mặt sau không được để trống.' })
  backBankCard: Image;
}
