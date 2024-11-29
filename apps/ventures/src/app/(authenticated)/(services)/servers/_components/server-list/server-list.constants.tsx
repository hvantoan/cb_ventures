'use client';

import { DATE_TIME_FORMAT } from '@hvantoan/utilities/constants';
import { toCurrency } from '@hvantoan/utilities/helpers/number-formatter';
import { Server } from '@modules/(services)/_models/server';
import { IconButton } from '@mui/material';
import dayjs from 'dayjs';
import type { MRT_ColumnDef } from 'material-react-table';

import AppLink from '@/components/app-link';
import { serversPath } from '@/routes';

const handleNavigate = (serverId: string) => {
  const url = `?serverId=${serverId}`;
  window.history.pushState(undefined, '', url);
};

export const columns: Array<MRT_ColumnDef<Server>> = [
  {
    header: 'Ngày đăng ký',
    accessorKey: 'createAt',
    size: 150,
    Cell: ({ renderedCellValue }) => dayjs(renderedCellValue as string).format(DATE_TIME_FORMAT),
    enableColumnFilter: false
  },
  {
    header: 'ID MT4',
    accessorKey: 'iD_MT4',
    size: 100,
    Cell: ({ renderedCellValue, row }) => {
      return <AppLink href={`${serversPath}/${row.original.id}`}>#{renderedCellValue}</AppLink>;
    }
  },
  {
    header: 'Broker Server',
    accessorKey: 'brokerServer',
    size: 150
  },
  {
    header: 'Khách hàng',
    id: 'userId',
    accessorKey: 'user.name'
  },
  {
    header: 'Gmail',
    id: 'email',
    accessorKey: 'user.email'
  },

  {
    header: 'Tên BOT',
    id: 'botName',
    accessorKey: 'bot.name',
    size: 100
  },
  {
    header: 'Tổng vốn',
    accessorKey: 'balance',
    muiTableHeadCellProps: {
      align: 'right'
    },
    muiTableBodyCellProps: {
      align: 'right'
    },
    Cell: ({ row }) => toCurrency(row.original.balance)
  },
  {
    header: '',
    id: 'actions',
    enableHiding: false,
    size: 50,
    muiTableBodyCellProps: {
      align: 'center'
    },
    Cell: ({ row }) => {
      return (
        <IconButton color='primary' onClick={() => handleNavigate(row.original.id)}>
          <span className='i-solar-info-circle-bold-duotone h-6 w-6' />
        </IconButton>
      );
    }
  }
];
