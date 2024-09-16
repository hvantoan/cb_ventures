'use client';

import { dataGridLocalization } from '@fumy/ui/constants/localization';
import { Bot } from '@modules/(category)/_models/bot';
import { useQueryBots } from '@modules/(category)/_queries/use-query-bots';
import { QueryBotFilter } from '@modules/(category)/_types/bot-filter';
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
import type { QueryProductFilter } from '@/store/reducers/product';

import { columns } from './bot-list.constants';

const SEARCH_LABEL = 'Tìm kiếm';
const SEARCH_PLACEHOLDER = 'Tìm theo mã hoặc tên bot';

export interface BotListRef {
  getFilters: () => QueryBotFilter;
}

interface BotListProps {
  initFilters: QueryBotFilter;
}

type BotColumnFilters = ColumnFiltersState<keyof QueryBotFilter, any>;

const BotList = forwardRef<BotListRef, BotListProps>(({ initFilters }, ref) => {
  const [filters, setFilters] = useImmer<QueryBotFilter>(initFilters);

  const { data, isLoading } = useQueryBots(filters);

  const getFilters = useCallback(() => filters, [filters]);

  useImperativeHandle(ref, () => ({ getFilters }));

  const handleFiltersChanged = useCallback<OnChangeFn<BotColumnFilters>>((updater) => {
    setFilters((draft) => {
      const columnFilters = Object.entries(draft).map(([key, value]) => ({
        id: key as keyof QueryBotFilter,
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
      return newValue as QueryBotFilter;
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
    ...(tableOptions as MRT_TableOptions<Bot>),
    columns,
    data: data?.data?.items || [],
    state: {
      pagination: {
        pageIndex: filters.pageIndex,
        pageSize: filters.pageSize
      },
      columnFilters: Object.entries(filters).map(([key, value]) => ({ id: key as keyof QueryProductFilter, value })),
      showSkeletons: isLoading
    },
    rowCount: data?.data?.count ?? 0,
    onColumnFiltersChange: handleFiltersChanged,
    onPaginationChange: setFilters,
    localization: dataGridLocalization,
    initialState: {
      density: 'compact'
    },
    enableColumnFilters: false,
    muiTableContainerProps: {
      className: 'w-full'
    }
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

export default BotList;
