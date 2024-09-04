declare interface ReceiptPayment {
  id: string;
  /**
   * 1 - Phiếu thu
   * 2 - Phiếu chi
   */
  type: 1 | 2;
  code: string;
  customerName: string;
  paymentMethodName: string;
  transactedAt: string;
  value: number;
  description: string;
  isDelete: boolean;
  isFirstItem: boolean;
}
