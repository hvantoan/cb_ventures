import { BankCard } from '../../../_model/bank-card';

export const bankCardFormLabels: Record<keyof Omit<BankCard, 'id'>, string> = {
  name: 'Chủ thẻ',
  cardNumber: 'Số thẻ',
  cardBranch: 'Chi nhánh',
  cvv: 'CVV',
  expirationDate: 'Ngày hết hạn',
  frontBankCard: 'Ảnh thẻ trước',
  backBankCard: 'Ảnh thẻ sau',
  userId: 'Người dùng',
  createdDate: 'Ngày tạo',
  isDelete: 'Đã xóa'
};
