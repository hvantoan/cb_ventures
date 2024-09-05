import { Contact } from '../../_model/contact';

export const contactFormLabels: Record<keyof Omit<Contact, 'id'>, string> = {
  name: 'Họ và Tên',
  phone: 'Số điện thoại',
  email: 'Email',
  identityCard: 'CMND/CCCD',
  bankAccount: 'STK ngân hàng',
  bankName: 'Tên ngân hàng',
  bankBranch: 'Chi nhánh',
  botId: 'Bot',
  frontIdentityCard: 'Ảnh CMND/CCCD mặt trước',
  backIdentityCard: 'Ảnh CMND/CCCD mặt sau',
  frontBankCard: 'Ảnh thẻ ngân hàng mặt trước',
  backBankCard: 'Ảnh thẻ ngân hàng mặt sau'
};
