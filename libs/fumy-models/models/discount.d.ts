declare interface Discount {
  id: string;
  orderId: string;
  orderDetailId: string;
  orderIndex: number;
  discountId: string;
  /**
   * 1: Value
   * 2: Percent
   */
  discountType: 1 | 2;
  discountValue: number;
  discountAmount: number;
  reason: string;
  titleDiscount: string;
}
