import { MRT_ColumnDef } from 'material-react-table';

import AppLink from '@/components/app-link';
import { settingRolePath } from '@/routes';

import { Role } from '../../_models/role';

export const columns: Array<MRT_ColumnDef<Role>> = [
  {
    accessorKey: 'code',
    header: 'Mã phân quyền',
    enableGlobalFilter: true,
    Cell: ({ renderedCellValue, row }) => (
      <AppLink href={`${settingRolePath}/${row.original.id}`}>{renderedCellValue}</AppLink>
    )
  },
  {
    accessorKey: 'name',
    header: 'Tên phân quyền',
    enableGlobalFilter: true
  }
];
