'use client';

import { dataGridLocalization } from '@fumy/ui/constants/localization';
import { Server } from '@modules/(services)/_models/server';
import { useQueryServers } from '@modules/(services)/_queries/use-query-servers';
import { QueryServerFilter } from '@modules/(services)/_types/server-filter';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, InputAdornment, Stack, TextField, debounce } from '@mui/material';
import type { ColumnFiltersState, OnChangeFn } from '@tanstack/react-table';
import {
  MRT_ShowHideColumnsButton,
  MRT_TableContainer,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  MRT_ToolbarAlertBanner,
  useMaterialReactTable,
  type MRT_TableOptions
} from 'material-react-table';
import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { useImmer } from 'use-immer';

import { tableOptions } from '@/configs/table-options';

import { columns } from './server-list.constants';

const SEARCH_LABEL = 'Tìm kiếm';
const SEARCH_PLACEHOLDER = 'Tìm theo Tên hoặc ID MT4';

export interface ServerListRef {
  getFilters: () => QueryServerFilter;
}

interface ServerListProps {
  initFilters: QueryServerFilter;
}

type ServerColumnFilters = ColumnFiltersState<keyof QueryServerFilter, any>;

const ServerList = forwardRef<ServerListRef, ServerListProps>(({ initFilters }, ref) => {
  const [filters, setFilters] = useImmer<QueryServerFilter>(initFilters);

  const { data, isLoading } = useQueryServers(filters);

  const getFilters = useCallback(() => filters, [filters]);

  useImperativeHandle(ref, () => ({ getFilters }));

  const handleFiltersChanged = useCallback<OnChangeFn<ServerColumnFilters>>((updater) => {
    setFilters((draft) => {
      const columnFilters = Object.entries(draft).map(([key, value]) => ({
        id: key as keyof QueryServerFilter,
        value
      }));
      const newFilters = updater instanceof Function ? updater(columnFilters) : updater;
      const newValue = newFilters.reduce(
        (acc, curr) => {
          acc[curr.id] = curr.value;
          return acc;
        },
        {} as Record<string, unknown>
      );
      newValue.pageIndex = 0;
      return newValue as QueryServerFilter;
    });
  }, []);

  const handleInputChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.trim() === filters.searchText) return;
      setFilters((draft) => {
        draft.searchText = e.target.value.trim() ?? '';
      });
    }, 300),
    []
  );

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<Server>),
    columns,
    data: data?.items || [],
    state: {
      pagination: {
        pageIndex: filters.pageIndex,
        pageSize: filters.pageSize
      },
      showSkeletons: isLoading
    },
    rowCount: data?.count ?? 0,
    onColumnFiltersChange: handleFiltersChanged,
    onPaginationChange: setFilters,
    localization: dataGridLocalization,
    initialState: {
      density: 'compact'
    },
    enableColumnActions: false,
    enableColumnFilters: false
  });
  return (
    <Card>
      <div className='flex flex-col justify-between gap-2 p-4 md:flex-row'>
        <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
          <TextField
            label={SEARCH_LABEL}
            placeholder={SEARCH_PLACEHOLDER}
            onChange={handleInputChange}
            className='w-full md:w-[300px]'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Stack>
        <div className='flex justify-end md:items-center'>
          <MRT_ShowHideColumnsButton table={table} />
          <MRT_ToggleDensePaddingButton table={table} />
        </div>
      </div>
      <MRT_TableContainer table={table} />
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <MRT_TablePagination table={table} />
        </Box>
        <Box sx={{ display: 'grid', width: '100%' }}>
          <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
        </Box>
      </Box>
    </Card>
  );
});

export default ServerList;
