import { type Merchant } from '@modules/(setting)/settings/merchant/_models/merchant';

export const merchantFormLabels: Record<keyof Omit<Merchant, 'id'>, string> = {
  code: 'Mã cửa hàng',
  name: 'Tên cửa hàng',
  phone: 'Số điện thoại',
  email: 'Email',
  province: 'Tỉnh/Thành phố',
  district: 'Quận/Huyện',
  commune: 'Phường/Xã',
  address: 'Địa chỉ',
  logo: 'Logo'
};
