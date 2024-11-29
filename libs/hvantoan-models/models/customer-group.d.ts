declare interface CustomerGroup {
  id: string;
  code: string;
  name: string;
  numberOfCustomers?: number;
  totalPurchaseCost?: number;
  totalPurchaseAmount?: number;
  customers?: Array<Customer>;
  customerIds?: Array<string>;
  description?: string;
}
