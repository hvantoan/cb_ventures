'use client';

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

import { UserRequest } from '../../_models/user-request';
import { useQueryUserRequests } from '../../_queries/use-query-user-requests';
import { columns } from './user-request-list.define';

interface UserRequestListsProps {
  initFilter: BaseListRequest;
}

const SEARCH_PLACEHOLDER = 'Tìm kiếm theo mã yêu cầu';

const UserRequestList: React.FC<UserRequestListsProps> = ({ initFilter }) => {
  const [filter, setFilter] = useImmer(initFilter);
  const { data: userQuery, isLoading } = useQueryUserRequests(filter);

  const onGlobalFilterChange = useCallback<OnChangeFn<string>>((updater) => {
    setFilter((draft) => {
      const newSearchText = updater instanceof Function ? updater(draft.searchText ?? '') : updater;
      draft.searchText = newSearchText;
    });
  }, []);

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<UserRequest>),
    columns,
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
    onGlobalFilterChange,
    enableColumnActions: false
  });

  return (
    <Card className='mt-4'>
      <div className='flex flex-row justify-between p-4 md:items-center'>
        <MRT_GlobalFilterTextField
          table={table}
          size='medium'
          placeholder={SEARCH_PLACEHOLDER}
          className='min-w-72'
          fullWidth
        />
        <div className='flex items-center justify-end'>
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
        </div>
      </div>
      <MRT_TableContainer table={table} />
      <MRT_TablePagination table={table} />
    </Card>
  );
};

export default UserRequestList;
