declare interface Permission {
  id: string;
  name: string;
  isEnable: boolean;
  items: Array<Permission>;
}

declare interface Role {
  id: string;
  code: string;
  name: string;
  description: string;
  permissions: Array<Permission>;
}

declare interface User {
  id: string;
  username: string;
  name: string;
  phone: string;
  province: AdministrativeUnit;
  district: AdministrativeUnit;
  commune: AdministrativeUnit;
  address: string;
  isActive: boolean;
  isAdmin: boolean;
  role: Role;
}
