
import * as routes from '@/routes';
import { Roles } from '@/enums/role.enum';

export const routeRoleMapping = [
  { route: routes.dashboardPath, role: Roles.Dashboard },
];
