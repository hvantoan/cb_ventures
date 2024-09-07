import { NavigationWithRole } from '@/components/navigation';
import { Roles } from '@/enums/role.enum';

export const navItems: Array<NavigationWithRole> = [
  {
    name: 'Home',
    path: 'home',
    icon: 'i-solar-code-scan-bold-duotone'
  },
  {
    name: 'Chúng tôi',
    path: 'contact',
    icon: 'i-solar-chat-round-money-bold'
  },
  {
    name: 'Liên hệ',
    path: 'contact',
    icon: 'i-solar-smartphone-2-bold',
    children: [
      {
        name: 'Danh sách liên hệ',
        path: 'contacts',
        role: Roles.Contact
      }
    ]
  },
  {
    name: 'Tổng quan',
    path: 'dashboard',
    role: Roles.Dashboard,
    icon: 'i-solar-code-scan-bold-duotone'
  },
  {
    name: 'Cài đặt',
    path: 'setting',
    icon: 'i-solar-settings-bold-duotone',
    role: Roles.Setting,
    children: [
      {
        name: 'Thông tin chung',
        path: 'settings/merchant',
        role: Roles.SettingUser
      },
      {
        name: 'Người dùng',
        path: 'settings/users',
        role: Roles.SettingUser
      },
      {
        name: 'Phân quyền',
        path: 'settings/role',
        role: Roles.SettingRole
      }
    ]
  }
];
