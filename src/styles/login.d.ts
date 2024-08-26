declare interface LoginUser {
  name: string;
}

declare interface LoginDto extends LoginUser {
  refreshToken: string;
  token: string;
  expiredTime: number;
  session: number;
}
