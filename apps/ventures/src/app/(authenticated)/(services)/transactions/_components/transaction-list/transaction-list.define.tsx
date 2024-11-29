import { DATE_TIME_FORMAT } from '@hvantoan/utilities/constants';
import { currencyFormatter } from '@hvantoan/utilities/helpers/number-formatter';
import { ETransactionType } from '@modules/(services)/_enums/transaction-type';
import { Transaction } from '@modules/(services)/transactions/_models/transaction';
import dayjs from 'dayjs';
import { MRT_ColumnDef } from 'material-react-table';

import TransactionStatusChip from '../transaction-status-chip/transaction-status-chip';

export const columns: Array<MRT_ColumnDef<Transaction>> = [
  {
    header: 'Ngày giao dịch',
    accessorKey: 'transactionAt',
    Cell: ({ renderedCellValue }) => dayjs(renderedCellValue as string).format(DATE_TIME_FORMAT),
    enableColumnFilter: false,
    enableGlobalFilter: false
  },
  {
    header: 'Tên',
    accessorKey: 'userBot.user.name',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Email',
    accessorKey: 'userBot.email',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Broker Server',
    accessorKey: 'userBot.brokerServer',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Số tiền',
    accessorKey: 'amount',
    Cell: ({ renderedCellValue }) => `${currencyFormatter.format(renderedCellValue as number)}`
  },
  {
    header: 'Loại giao dịch',
    accessorKey: 'transactionType',
    muiTableHeadCellProps: {
      align: 'center'
    },
    muiTableBodyCellProps: {
      align: 'center'
    },
    Cell: ({ renderedCellValue }) => <TransactionStatusChip status={renderedCellValue as ETransactionType} />
  }
];
