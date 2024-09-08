'use client';

import { Role } from '@modules/(setting)/settings/role/_models/role';
import { useQueryAllRoles } from '@modules/(setting)/settings/role/_queries/use-query-all-roles';
import { Card } from '@mui/material';
import {
  MRT_GlobalFilterTextField,
  MRT_TableContainer,
  MRT_TableOptions,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  useMaterialReactTable
} from 'material-react-table';

import { tableOptions } from '@/configs/table-options';

import { columns } from './role-list.define';

const RoleList: React.FC = () => {
  const { data: roles, isLoading } = useQueryAllRoles();

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<Role>),
    columns,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableGlobalFilter: true,
    data: roles ?? [],
    manualPagination: false,
    manualFiltering: false,
    initialState: {
      showGlobalFilter: true,
      pagination: {
        pageSize: 15,
        pageIndex: 0
      }
    },
    state: {
      showSkeletons: isLoading
    }
  });

  return (
    <Card className='mt-4'>
      <div className='mt-4 flex flex-col items-center p-4 md:flex-row md:justify-between'>
        <MRT_GlobalFilterTextField table={table} />
        <div className='flex items-center'>
          <MRT_ToggleDensePaddingButton table={table} />
        </div>
      </div>
      <MRT_TableContainer table={table} />
      <MRT_TablePagination table={table} />
    </Card>
  );
};

export default RoleList;
