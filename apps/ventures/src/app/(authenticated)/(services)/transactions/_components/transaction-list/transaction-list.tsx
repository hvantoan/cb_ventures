'use client';

import { DateRangePicker } from '@fumy/ui/components';
import { useQueryTransactions } from '@modules/(services)/_queries/use-query-transactions';
import { QueryTransactionFilter } from '@modules/(services)/_types/transaction-filter';
import { Transaction } from '@modules/(services)/transactions/_models/transaction';
import { Card } from '@mui/material';
import { type ColumnFiltersState, OnChangeFn } from '@tanstack/react-table';
import dayjs from 'dayjs';
import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TableContainer,
  type MRT_TableOptions,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
  useMaterialReactTable
} from 'material-react-table';
import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { useImmer } from 'use-immer';

import { tableOptions } from '@/configs/table-options';

import { columns } from './transaction-list.define';

interface TransactionListProps {
  initFilter: QueryTransactionFilter;
}

export interface TransactionListRef {
  getFilters: () => QueryTransactionFilter;
}

type RpColumnFilters = ColumnFiltersState<keyof QueryTransactionFilter, any>;

const ReceiptPaymentList = forwardRef<TransactionListRef, TransactionListProps>(({ initFilter }, ref) => {
  const [filters, setFilters] = useImmer<QueryTransactionFilter>(initFilter);
  const { data, isLoading, isPending } = useQueryTransactions(filters);

  const getFilters = useCallback(() => filters, [filters]);

  useImperativeHandle(ref, () => ({ getFilters }));

  const onGlobalFilterChange = useCallback<OnChangeFn<string>>((updater) => {
    setFilters((draft) => {
      const newSearchText = updater instanceof Function ? updater(draft.searchText ?? '') : updater;
      draft.searchText = newSearchText;
    });
  }, []);

  const handleFiltersChanged = useCallback<OnChangeFn<RpColumnFilters>>((updater) => {
    setFilters((draft) => {
      const columnFilters = Object.entries(draft).map(([key, value]) => ({
        id: key as keyof QueryTransactionFilter,
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
      return newValue as QueryTransactionFilter;
    });
  }, []);

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<Transaction>),
    columns,
    data: data?.items ?? [],
    paginationDisplayMode: 'pages',
    enableGlobalFilter: true,
    enableSorting: false,
    manualFiltering: true,
    manualPagination: true,
    muiPaginationProps: {
      color: 'info',
      variant: 'soft',
      shape: 'rounded'
    },
    rowCount: data?.count ?? 0,
    state: {
      showSkeletons: isLoading || isPending,
      pagination: {
        pageIndex: filters.pageIndex,
        pageSize: filters.pageSize
      },
      columnFilters: Object.entries(filters).map(([key, value]) => ({
        id: key as keyof QueryTransactionFilter,
        value
      })),
      globalFilter: filters.searchText
    },
    onGlobalFilterChange,
    onColumnFiltersChange: handleFiltersChanged,
    onPaginationChange: setFilters
  });

  const handleDateRangeChanged = useCallback(([startDate, endDate]: [Date?, Date?]) => {
    setFilters((draft) => {
      draft.startDate = dayjs(startDate).startOf('date').toISOString();
      draft.endDate = dayjs(endDate).endOf('date').toISOString();
    });
  }, []);

  return (
    <Card>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center p-4 md:flex-row md:justify-between'>
          <DateRangePicker
            size='small'
            startDate={new Date(filters.startDate!)}
            endDate={new Date(filters.endDate!)}
            onChange={handleDateRangeChanged}
          />
          <div className='flex items-center'>
            <div className='flex items-center gap-2'>
              <MRT_GlobalFilterTextField table={table} placeholder='Mã phiếu, khách hàng' />
              <MRT_ToggleGlobalFilterButton table={table} />
            </div>
            <MRT_ToggleFiltersButton table={table} />
            <MRT_ShowHideColumnsButton table={table} />
            <MRT_ToggleDensePaddingButton table={table} />
          </div>
        </div>
        <div>
          <MRT_TableContainer table={table} />
          <MRT_TablePagination table={table} />
        </div>
      </div>
    </Card>
  );
});

export default ReceiptPaymentList;
