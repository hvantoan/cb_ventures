import type { NavigationWithRole } from '@/components/navigation';
import { Roles } from '@/enums/role.enum';

export const getValidNavigationItems = (
  navItems: Array<NavigationWithRole>,
  roles: Array<Roles>
): Array<NavigationWithRole> => {
  if (roles.includes(Roles.Admin)) return navItems;

  const res = navItems.filter((navItem) => {
    if (!navItem.role) return true;

    if (navItem.role === Roles.Setting) {
      return roles.some((role) => Roles.Setting.includes(role));
    }

    return roles.includes(navItem.role);
  });

  return res;
};
