import { DATE_FORMAT } from '@fumy/utilities/constants';
import { currencyFormatter } from '@fumy/utilities/helpers/number-formatter';
import { TransactionType } from '@modules/(services)/_enums/transaction-type';
import { Transaction } from '@modules/(services)/_models/transaction';
import { MRT_ColumnDef } from 'material-react-table';

export const columns: Array<MRT_ColumnDef<Transaction>> = [
  {
    header: 'Ngày giao dịch',
    accessorKey: 'transactionDate',
    Cell: ({ row }) => row.original.transactionDate.format(DATE_FORMAT),
    enableColumnFilter: false,
    enableGlobalFilter: false
  },
  {
    header: 'Tên',
    accessorKey: 'account.name',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Email',
    accessorKey: 'account.email',
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
    Cell: ({ renderedCellValue }) => (renderedCellValue === TransactionType.INCOME ? 'Thu' : 'Chi')
  }
];
