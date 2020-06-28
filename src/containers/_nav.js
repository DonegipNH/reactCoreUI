export default [  
  {
    _tag: 'CSidebarNavItem',
    name: 'Thống kê',
    to: '/charts',
    icon: 'cil-account-logout'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Voucher',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Sinh mã Voucher',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Quản lý mã Voucher',
        to: '/base/cards',
      }      
    ],
  },  
  {
    _tag: 'CSidebarNavItem',
    name: 'Quản lý người dùng',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Đăng thông báo',
    to: '/charts',
    icon: 'cil-chart-pie'
  },  
]

