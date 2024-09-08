import { Roles } from '@/enums/role.enum';
import * as routes from '@/routes';

export const routeRoleMapping = [
  { route: routes.dashboardPath, role: Roles.Dashboard },
  { route: routes.settingMerchantPath, role: Roles.SettingUser },
  { route: routes.settingRolePath, role: Roles.SettingRole },
  { route: routes.settingUserPath, role: Roles.SettingUser }
];
