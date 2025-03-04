import { NavigationWithRole } from '@/components/navigation';
import { Roles } from '@/enums/role.enum';
import { homePath, pricingPath, roadmapPath, wePath } from '@/routes';

export const navItems: Array<NavigationWithRole> = [
  {
    name: 'Tổng quan',
    path: 'dashboard',
    role: Roles.Dashboard,
    icon: 'i-solar-code-scan-bold-duotone'
  },
  {
    name: 'Dịch vụ',
    path: 'services',
    icon: 'i-solar-chat-round-money-bold',
    role: Roles.Service,
    children: [
      {
        name: 'Danh sách giao dịch',
        path: 'transactions',
        role: Roles.Transaction
      },
      {
        name: 'Danh sách Server',
        path: 'servers',
        role: Roles.Server
      }
    ]
  },
  {
    name: 'Liên hệ',
    path: 'contact',
    icon: 'i-solar-smartphone-2-bold',
    role: Roles.Contact,
    children: [
      {
        name: 'Danh sách liên hệ',
        path: 'contacts',
        role: Roles.Contact
      }
    ]
  },
  {
    name: 'Danh mục',
    path: 'category',
    icon: 'i-solar-bill-list-bold',
    role: Roles.Category,
    children: [
      {
        name: 'Bot',
        path: 'bots',
        role: Roles.Bot
      }
    ]
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
  },
  {
    name: 'Trang chủ',
    path: homePath,
    icon: 'i-solar-home-bold'
  },
  {
    name: 'Giá',
    path: pricingPath,
    icon: 'i-solar-tag-price-bold'
  },
  {
    name: 'Kế hoạch',
    path: roadmapPath,
    icon: 'i-solar-plate-bold'
  },
  {
    name: 'Chúng tôi',
    path: wePath,
    icon: 'i-solar-info-square-bold'
  }
];
