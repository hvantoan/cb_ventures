declare interface Customer {
  [k: string]: any;
  id: string;
  code: string;
  name: string;
  phone: string;
  province: AdministrativeUnit | null;
  district: AdministrativeUnit | null;
  commune: AdministrativeUnit | null;
  address: string;
  /**
   * Last purchase date
   */
  lastPurchase?: Date;
  /**
   * Last purchase number of days calculated from last purchase date
   */
  lastPurchaseNumberDays?: number;

  /**
   * customer type
   * 0: Customer
   * 1: Order customer
   */
  type: number;

  customerGroup: CustomerGroup;
}
