export const NavigationGroups: Array<NavigationInfo> = [
  {
    name: 'Tổng quan',
    path: '/dashboard'
  },
  {
    name: 'Quản lý sản phẩm',
    path: '/products',
    children: [
      {
        name: 'Danh sách sản phẩm',
        path: '/products/list'
      },
      {
        name: 'Danh mục sản phẩm',
        path: '/categories'
      },
      {
        name: 'Thương hiệu',
        path: '/brands'
      }
    ]
  },
  {
    name: 'Quản lý khách hàng',
    path: '/customers',
    children: [
      {
        name: 'Danh sách khách hàng',
        path: '/customers/list'
      },
      {
        name: 'Nhóm khách hàng',
        path: '/customer-groups'
      },
      {
        name: 'Phiếu nợ',
        path: '/customer-debit-ticket'
      }
    ]
  }
];
