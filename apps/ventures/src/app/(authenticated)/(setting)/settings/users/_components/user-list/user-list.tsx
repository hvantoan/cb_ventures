'use client';

import { User } from '@modules/(setting)/settings/users/_models/user';
import { useQueryUsers } from '@modules/(setting)/settings/users/_queries/use-query-users';
import { Card } from '@mui/material';
import { OnChangeFn } from '@tanstack/react-table';
import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TableContainer,
  MRT_TableOptions,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  useMaterialReactTable
} from 'material-react-table';
import { useCallback } from 'react';
import { useImmer } from 'use-immer';

import { tableOptions } from '@/configs/table-options';

import { columns } from './user-list.define';

interface UserListProps {
  initFilter: BaseListRequest;
}

const UserList: React.FC<UserListProps> = ({ initFilter }) => {
  const [filter, setFilter] = useImmer(initFilter);
  const { data: userQuery, isLoading } = useQueryUsers(filter);

  const onGlobalFilterChange = useCallback<OnChangeFn<string>>((updater) => {
    setFilter((draft) => {
      const newSearchText = updater instanceof Function ? updater(draft.searchText ?? '') : updater;
      draft.searchText = newSearchText;
    });
  }, []);

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<User>),
    columns,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableGlobalFilter: true,
    data: userQuery?.items ?? [],
    rowCount: userQuery?.count ?? 0,
    initialState: {
      showGlobalFilter: true
    },
    state: {
      globalFilter: filter.searchText,
      pagination: {
        pageIndex: filter.pageIndex,
        pageSize: filter.pageSize
      },
      showSkeletons: isLoading
    },
    onPaginationChange: setFilter,
    onGlobalFilterChange
  });

  return (
    <Card className='mt-4'>
      <div className='flex flex-col items-center p-4 md:flex-row md:justify-between'>
        <MRT_GlobalFilterTextField table={table} />
        <div className='flex items-center'>
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
        </div>
      </div>
      <MRT_TableContainer table={table} />
      <MRT_TablePagination table={table} />
    </Card>
  );
};

export default UserList;
