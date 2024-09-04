'use client';

/* eslint-disable react/no-unstable-nested-components */
import { CustomerSelect } from '@modules/(customer)/_components/customer-select';
import type { Customer } from '@modules/(customer)/_models/customer';
import { ERequestStatus } from '@modules/(setting)/settings/request/_enums/request-status';
import { Button, Card, IconButton, Typography } from '@mui/material';
import {
  type MRT_ColumnDef,
  MRT_TableContainer,
  type MRT_TableOptions,
  useMaterialReactTable
} from 'material-react-table';
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from 'react';
import { Control, Controller, useFieldArray, useFormState, useWatch } from 'react-hook-form';

import { tableOptions } from '@/configs/table-options';

import { MergeCustomer } from '../../_models/merge-customer';
import { UserRequest } from '../../_models/user-request';

interface UserRequestFormDetailProps {
  control: Control<UserRequest>;
}

interface UserRequestRef {
  append: (data: MergeCustomer) => void;
}

const getOptionLabel = (option: Customer) => option?.code ?? '';

const renderOption = (props: React.HTMLAttributes<HTMLLIElement>, option: Customer) => (
  <li {...props} key={option?.id}>
    {option?.name} - {option?.phone}
  </li>
);

const UserRequestFormCustomers = forwardRef<UserRequestRef, UserRequestFormDetailProps>(({ control }, ref) => {
  const { append, fields, remove } = useFieldArray({ control, name: 'data.mergeCustomerLeafs' });

  useImperativeHandle(
    ref,
    () => ({
      append
    }),
    []
  );

  const columns = useMemo<Array<MRT_ColumnDef<MergeCustomer>>>(
    () => [
      {
        header: 'Mã khách hàng',
        accessorKey: 'customer.id',
        size: 280,
        Cell: ({ row }) => (
          <Controller
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              const status = useWatch({ control, name: 'status' });
              const customers = useWatch({ control, name: 'data.mergeCustomerLeafs' });
              const rootCustomer = useWatch({ control, name: 'data.customer' });

              const excludeIds = useMemo(() => {
                const mergedCustomerIds = customers?.map((item) => item.customer?.id) ?? [];
                if (rootCustomer?.id) return [...mergedCustomerIds, rootCustomer?.id];
                return mergedCustomerIds;
              }, [customers, rootCustomer?.id]);

              return (
                <CustomerSelect
                  value={value ?? null}
                  onChange={onChange}
                  getOptionLabel={getOptionLabel}
                  variant='outlined'
                  renderOption={renderOption}
                  excludeIds={excludeIds}
                  readOnly={status !== ERequestStatus.Pending}
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              );
            }}
            name={`data.mergeCustomerLeafs.${row.index}.customer`}
          />
        )
      },
      {
        header: 'Tên khách hàng',
        accessorKey: 'customer.name',
        Cell: ({ row }) => {
          const name = useWatch({
            control,
            name: `data.mergeCustomerLeafs.${row.index}.customer.name`
          });

          return name;
        }
      },
      {
        header: 'Số điện thoại',
        accessorKey: 'customer.phone',
        Cell: ({ row }) => {
          const phone = useWatch({
            control,
            name: `data.mergeCustomerLeafs.${row.index}.customer.phone`
          });

          return phone;
        }
      },
      {
        header: 'Địa chỉ',
        accessorKey: 'customer.address',
        Cell: ({ row }) => {
          const address = useWatch({
            control,
            name: `data.mergeCustomerLeafs.${row.index}.customer.address`
          });

          return address;
        }
      },
      {
        header: '',
        id: 'action',
        muiTableBodyCellProps: {
          align: 'right'
        },
        muiTableHeadCellProps: {
          align: 'right'
        },
        Cell: ({ row }) => {
          const status = useWatch({ control, name: 'status' });
          return (
            <IconButton onClick={() => remove(row.index)} color='error' disabled={status !== ERequestStatus.Pending}>
              <span className='i-solar-trash-bin-minimalistic-bold-duotone h-5 w-5' />
            </IconButton>
          );
        }
      }
    ],
    []
  );

  const table = useMaterialReactTable({
    ...(tableOptions as MRT_TableOptions<MergeCustomer>),
    columns,
    data: fields ?? [],
    enablePagination: false,
    enableColumnActions: false,
    getRowId: (row) => row.customerId,
    renderEmptyRowsFallback: () => <span />
  });

  return <MRT_TableContainer table={table} />;
});

const TITLE = 'Chi tiết yêu cầu';
const ADD_BUTTON_LABEL = 'Thêm';

const UserRequestFormDetail: React.FC<UserRequestFormDetailProps> = ({ control }) => {
  const formArrayRef = useRef<UserRequestRef>(null);
  const mergeCustomerId = useWatch({ control, name: 'data.id' });
  const { errors } = useFormState({ control });

  const handleAddCustomer = useCallback(() => {
    formArrayRef.current?.append(new MergeCustomer(mergeCustomerId));
  }, [mergeCustomerId]);

  const status = useWatch({ control, name: 'status' });

  return (
    <Card>
      <div className='flex flex-col justify-between gap-x-2 gap-y-4 px-4 pt-4 md:flex-row md:items-center'>
        <Typography typography='h6' className='min-w-48'>
          {TITLE}
        </Typography>
        <div className='flex w-full  items-center justify-end gap-2 md:w-fit'>
          <Controller
            control={control}
            name='data.customer'
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              const customers = useWatch({
                control,
                name: 'data.mergeCustomerLeafs'
              });

              const excludeIds = useMemo(() => {
                const mergedCustomerIds = customers?.map((item) => item.customer?.id) ?? [];
                if (value?.id) return [...mergedCustomerIds, value?.id];
                return mergedCustomerIds;
              }, [customers, value?.id]);

              return (
                <CustomerSelect
                  onChange={onChange}
                  value={value ?? null}
                  label='Khách hàng (Gốc)'
                  required
                  variant='outlined'
                  fullWidth
                  className='md:min-w-72'
                  excludeIds={excludeIds}
                  readOnly={status !== ERequestStatus.Pending}
                  renderOption={renderOption}
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              );
            }}
          />
          {status === ERequestStatus.Pending && (
            <Button
              color='primary'
              startIcon={<span className='i-eva-plus-outline h-4 w-4' />}
              onClick={handleAddCustomer}
            >
              {ADD_BUTTON_LABEL}
            </Button>
          )}
        </div>
      </div>
      <div className='mt-4 pb-4'>
        <UserRequestFormCustomers control={control} ref={formArrayRef} />
      </div>
      {errors?.data?.mergeCustomerLeafs && (
        <Typography typography='caption' color='error' className='px-4 pb-4'>
          {errors?.data?.mergeCustomerLeafs?.message}
        </Typography>
      )}
    </Card>
  );
};

export default UserRequestFormDetail;
