declare interface Warehouse {
  id: string;
  /**
   * 0: Kho thường
   * 1: Kho phiếu
   */
  type: 0 | 1;
  code: string;
  name: string;
  province: AdministrativeUnit;
  district: AdministrativeUnit;
  commune: AdministrativeUnit;
  address: string;
  phone: string;
  email: string;
  isActive: boolean;
  isEditType: boolean;
}

declare interface RelatedToWarehouse {
  code: string;
  status: number;
  createdAt: string;
  detailUrl: string;
}
