import { DATE_TIME_FORMAT } from '@fumy/utilities/constants';
import { currencyFormatter } from '@fumy/utilities/helpers/number-formatter';
import { ETransactionType } from '@modules/(services)/_enums/transaction-type';
import { Transaction } from '@modules/(services)/_models';
import TransactionStatusChip from '@modules/(services)/transactions/_components/transaction-status-chip/transaction-status-chip';
import dayjs from 'dayjs';
import type { MRT_ColumnDef } from 'material-react-table';

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
    header: 'Số tiền',
    accessorKey: 'amount',
    Cell: ({ renderedCellValue }) => `${currencyFormatter.format(renderedCellValue as number)}`
  },
  {
    id: 'transactionType',
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
