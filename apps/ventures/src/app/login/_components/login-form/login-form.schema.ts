import { BaseField } from '@hvantoan/ui/base';
import { TextField } from '@mui/material';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Tên đăng nhập không được để trống' })
  public username: string = '';

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  public password: string = '';
}

export const loginFormFields: Array<BaseField<keyof LoginDto>> = [
  {
    name: 'username',
    Component: TextField,
    componentProps: {
      label: 'Tên đăng nhập'
    }
  },
  {
    name: 'password',
    Component: TextField,
    componentProps: {
      label: 'Mật khẩu',
      type: 'password'
    }
  }
];
