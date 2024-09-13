import { DATE_TIME_FORMAT } from '@fumy/utilities/constants';
import { currencyFormatter } from '@fumy/utilities/helpers/number-formatter';
import { Server } from '@modules/(services)/_models/server';
import dayjs from 'dayjs';
import type { MRT_ColumnDef } from 'material-react-table';

import FumyLink from '@/components/fumy-link';
import { serversPath } from '@/routes';

export const columns: Array<MRT_ColumnDef<Server>> = [
  {
    header: 'Ngày đăng ký',
    accessorKey: 'createAt',
    Cell: ({ renderedCellValue }) => dayjs(renderedCellValue as string).format(DATE_TIME_FORMAT),
    enableColumnFilter: false
  },
  {
    header: 'ID MT4',
    accessorKey: 'iD_MT4',
    Cell: ({ renderedCellValue, row }) => {
      return <FumyLink href={`${serversPath}/${row.original.id}`}>{renderedCellValue}</FumyLink>;
    }
  },
  {
    header: 'Broker Server',
    accessorKey: 'brokerServer',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Khách hàng',
    id: 'userId',
    accessorKey: 'user.name',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Gmail',
    id: 'email',
    accessorKey: 'user.email',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },

  {
    header: 'Tên BOT',
    accessorKey: 'bot.name',
    Cell: ({ renderedCellValue }) => renderedCellValue
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
    Cell: ({ row }) => currencyFormatter.format(row.original.balance)
  }
];
