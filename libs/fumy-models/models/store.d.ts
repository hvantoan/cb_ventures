declare interface Store {
  id: string;
  code: string;
  name: string;
  province: AdministrativeUnit;
  district: AdministrativeUnit;
  commune: AdministrativeUnit;
  address: string;
  phone: string;
  email: string;
  isActive: boolean;
  warehouseId: string;
  warehouse: Warehouse;
}
