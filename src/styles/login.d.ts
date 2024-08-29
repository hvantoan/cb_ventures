declare interface LoginUser {
  email: string;
  name: string;
  image: string;
}

declare interface LoginDto extends LoginUser {
  refreshToken: string;
  token: string;
  expiredTime: number;
  session: number;
}
