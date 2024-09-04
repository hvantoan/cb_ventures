import { Match } from '@fumy/utilities/decorators';
import { Exclude } from 'class-transformer';
import { MinLength } from 'class-validator';

export class ResetPasswordDto {
  constructor(userId: string) {
    this.userId = userId;
  }

  public userId: string;

  @MinLength(2, { message: 'Mật khẩu phải có ít nhất 2 ký tự' })
  @MinLength(1, { message: 'Mật khẩu không được để trống' })
  public password: string = '';

  @Exclude({ toPlainOnly: true })
  @Match('password', { message: 'Mật khẩu không khớp' })
  @MinLength(1, { message: 'Mật khẩu không được để trống' })
  public repeatPassword: string = '';
}
