'use client';

import { dataGridLocalization } from '@hvantoan/ui/constants/localization';
import { Contact } from '@modules/(contact)/_model/contact';
import { useQueryContacts } from '@modules/(contact)/_queries/use-query-contacts';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, InputAdornment, TextField, debounce } from '@mui/material';
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
import { useCallback } from 'react';
import { useImmer } from 'use-immer';

import { tableOptions } from '@/configs/table-options';

import { columns } from './contact-list.constants';

const SEARCH_LABEL = 'Tìm kiếm';
const SEARCH_PLACEHOLDER = 'Tìm theo mã, tên, SĐT hoặc email';

interface ContactListProps {
  initFilters: BaseListRequest;
}

type ContactColumnFilters = ColumnFiltersState<keyof BaseListRequest, any>;

const ContactList: React.FC<ContactListProps> = ({ initFilters }) => {
  const [filters, setFilters] = useImmer<BaseListRequest>(initFilters);

  const { data, isLoading } = useQueryContacts(filters);

  const handleFiltersChanged = useCallback<OnChangeFn<ContactColumnFilters>>((updater) => {
    setFilters((draft) => {
      const columnFilters = Object.entries(draft).map(([key, value]) => ({
        id: key as keyof BaseListRequest,
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
      return newValue as BaseListRequest;
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
    ...(tableOptions as MRT_TableOptions<Contact>),
    columns,
    data: data?.items || [],
    state: {
      pagination: {
        pageIndex: filters.pageIndex,
        pageSize: filters.pageSize
      },
      columnFilters: Object.entries(filters).map(([key, value]) => ({ id: key as keyof BaseListRequest, value })),
      showSkeletons: isLoading
    },
    rowCount: data?.count ?? 0,
    onColumnFiltersChange: handleFiltersChanged,
    onPaginationChange: setFilters,
    localization: dataGridLocalization,
    initialState: {
      density: 'compact'
    },
    enableColumnFilters: false,
    enableColumnActions: false
  });
  return (
    <Card>
      <div className='flex flex-col justify-between gap-2 p-4 md:flex-row'>
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
};

export default ContactList;
