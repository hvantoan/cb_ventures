import { MRT_ColumnDef } from 'material-react-table';

import FumyLink from '@/components/fumy-link';
import { settingRolePath } from '@/routes';

import { Role } from '../../_models/role';

export const columns: Array<MRT_ColumnDef<Role>> = [
  {
    accessorKey: 'code',
    header: 'Mã phân quyền',
    enableGlobalFilter: true,
    Cell: ({ renderedCellValue, row }) => (
      <FumyLink href={`${settingRolePath}/${row.original.id}`}>{renderedCellValue}</FumyLink>
    )
  },
  {
    accessorKey: 'name',
    header: 'Tên phân quyền',
    enableGlobalFilter: true
  }
];
