declare interface OrderItem {
  id: string;
  groupId: string;
  isOverThreshold: boolean;
  orderIndex: number;
  product: Product;
  price: number;
  quantity: number;
  subTotal: number;
  itemDiscount: number;
  totalItem: number;
  exportQuantity: number;
  refundQuantity: number;
  refundAmount: number;
  isPromotion: boolean;
  discounts?: Array<Discount>;
}

declare interface OrderActionItem {
  orderDetailId: string;
  quantity: number;
  price: number;
}

declare interface ExportOrderVM {
  itemId: string;
  productCode: string;
  productName: string;
  orderQuantity: number;
  price: number;
  subTotal: number;
  exportQuantity: number;
  quantity: number;
  limitQuantity: number;
  isPromotion: boolean;
}

declare interface RefundOrderVM {
  itemId: string;
  productCode: string;
  productName: string;
  orderQuantity: number;
  exportedQuantity: number;
  refundedQuantity: number;
  refundQuantity: number;
  refundPrice: number;
  isPromotion: boolean;
}

declare interface OrderAction {
  id: string;
  /**
   * 1: Export
   * 2: Refund
   */
  type: 1 | 2;
  code: string;
  time: number;
  date: string;
  isDelete: boolean;
  hasPayment: boolean;
  items: Array<OrderActionItem>;
  isNew: boolean;
  title: string;
  exportItems: Array<ExportOrderVM>;
  refundItems: Array<RefundOrderVM>;
}

declare interface Order {
  id: string;
  orderNo: string;
  orderStatus: number;
  subTotal: number;
  billDiscount: number;
  subDiscount: number;
  totalDiscount: number;
  totalBill: number;
  totalOverExport: number;
  totalRefundQuantity: number;
  totalRefund: number;
  exportTime: number;
  refundTime: number;
  paymentStatus: number;
  remaining: number;
  paid: number;
  refunded: number;
  description: string;
  createdDate: number;
  items: Array<OrderItem>;
  store: Store;
  warehouse: Warehouse;
  customer: Customer;
  isUseCustomerInfo: boolean;
  delivery: Delivery;
  createdBy: User;
  actions: Array<OrderAction>;
  discounts: Array<Discount>;
  receiptPayments: Array<ReceiptPayment>;
  relatedToWarehouses: Array<RelatedToWarehouse>;
}
