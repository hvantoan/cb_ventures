import type { NavigationWithRole } from '@/components/navigation';
import { Roles } from '@/enums/role.enum';

export const getValidNavigationItems = (
  navItems: Array<NavigationWithRole>,
  roles: Array<Roles>
): Array<NavigationWithRole> => {
  roles ??= [];
  if (roles.includes(Roles.Admin)) return navItems;

  const res = navItems.filter((navItem) => {
    if (!navItem.role) return true;

    if (navItem.children && navItem.children.some((child) => !child.role || roles.includes(child.role))) {
      return true;
    }
    return roles.includes(navItem.role);
  });
  return res;
};
