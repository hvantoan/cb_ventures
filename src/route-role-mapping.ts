
import * as routes from '@/routes';
import { Roles } from '@/libs/enums/role.enum';

export const routeRoleMapping = [
  { route: routes.dashboardPath, role: Roles.Dashboard },
];
