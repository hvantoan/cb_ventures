import { Match } from '@fumy/utilities/decorators';
import { Exclude } from 'class-transformer';
import { MinLength } from 'class-validator';

export class ResetPinCodeDto {
  constructor(userId: string) {
    this.userId = userId;
  }

  public userId: string;

  @MinLength(6, { message: 'Mã PIN phải có ít nhất 6 ký tự' })
  @MinLength(1, { message: 'Mã PIN không được để trống' })
  public pinCode: string = '';

  @Exclude({ toPlainOnly: true })
  @Match('pinCode', { message: 'Mã PIN không khớp' })
  @MinLength(1, { message: 'Mã PIN không được để trống' })
  public repeatPinCode: string = '';
}
