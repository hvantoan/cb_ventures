import { Roles } from '@/enums/role.enum';

export interface NavigationWithRole extends NavigationInfo {
  role?: Roles;
  children?: Array<NavigationWithRole>;
}
