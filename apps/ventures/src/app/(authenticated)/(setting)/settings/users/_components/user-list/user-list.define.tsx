import { User } from '@modules/(setting)/settings/users/_models/user';
import { Chip, Typography } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

import AppLink from '@/components/app-link';
import { settingUserPath } from '@/routes';

const ADMIN_ROLE = 'Administrator';

export const columns: Array<MRT_ColumnDef<User>> = [
  {
    accessorKey: 'username',
    header: 'Tên đăng nhập',
    enableGlobalFilter: true,
    Cell: ({ renderedCellValue, row }) =>
      row.original.isAdmin ? (
        <Typography component='span' variant='body2' fontWeight={700}>
          {renderedCellValue}
        </Typography>
      ) : (
        <AppLink href={`${settingUserPath}/${row.original.id}`}>{renderedCellValue}</AppLink>
      )
  },
  {
    accessorKey: 'role.name',
    header: 'Quyền truy cập',
    Cell: ({ renderedCellValue, row }) =>
      row.original.isAdmin ? (
        <Typography component='span' variant='body2' fontWeight={700}>
          {ADMIN_ROLE}
        </Typography>
      ) : (
        renderedCellValue
      )
  },
  {
    accessorKey: 'name',
    header: 'Tên người dùng',
    enableGlobalFilter: true,
    Cell: ({ renderedCellValue, row }) =>
      row.original.isAdmin ? (
        <Typography component='span' variant='body2' fontWeight={700}>
          {renderedCellValue}
        </Typography>
      ) : (
        renderedCellValue
      )
  },
  {
    accessorKey: 'isActive',
    header: 'Trạng thái',
    Cell: ({ row }) => (
      <Chip
        color={row.original.isActive ? 'primary' : 'error'}
        label={row.original.isActive ? 'Đang hoạt động' : 'Dừng hoạt động'}
      />
    )
  }
];
