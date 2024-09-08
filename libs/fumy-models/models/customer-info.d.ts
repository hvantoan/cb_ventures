declare interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  district: AdministrativeUnit | null;
  province: AdministrativeUnit | null;
  commune: AdministrativeUnit | null;
}
