import { Contact } from '../../../_model/contact';

export const contactFormLabels: Record<keyof Omit<Contact, 'id'>, string> = {
  name: 'Họ và Tên',
  phone: 'Số điện thoại',
  email: 'Email',
  identityCard: 'CMND/CCCD',
  botId: 'Bot',
  frontIdentityCard: 'Ảnh CMND/CCCD mặt trước',
  backIdentityCard: 'Ảnh CMND/CCCD mặt sau',
  bankCardId: 'Thẻ ngân hàng',
  bankCard: 'Thẻ ngân hàng'
};
