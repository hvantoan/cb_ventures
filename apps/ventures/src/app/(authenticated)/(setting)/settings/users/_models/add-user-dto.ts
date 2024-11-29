import { Match } from '@hvantoan/utilities/decorators';
import { User } from '@modules/(setting)/settings/users/_models/user';
import { MinLength, ValidateIf } from 'class-validator';

export class AddUserDto extends User {
  @ValidateIf((o) => !o.id)
  @MinLength(1, { message: 'Mật khẩu không được để trống' })
  @MinLength(2, { message: 'Mật khẩu phải có ít nhất 2 ký tự' })
  public password: string = '';

  @ValidateIf((o) => !o.id)
  @Match('password', { message: 'Mật khẩu không khớp' })
  @MinLength(1, { message: 'Mật khẩu không được để trống' })
  public repeatPassword: string = '';

  @ValidateIf((o) => !o.id)
  @MinLength(1, { message: 'Mã PIN không được để trống' })
  @MinLength(6, { message: 'Mã PIN phải có ít nhất 6 ký tự' })
  public pinCode: string = '';
}
