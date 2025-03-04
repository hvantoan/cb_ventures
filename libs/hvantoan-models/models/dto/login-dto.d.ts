declare interface LoginUser {
  merchantCode: string;
  merchantName: string;
  name: string;
  avatar: string;
}

declare interface LoginDto extends LoginUser {
  refreshToken: string;
  token: string;
  expiredTime: number;
  session: number;
}
