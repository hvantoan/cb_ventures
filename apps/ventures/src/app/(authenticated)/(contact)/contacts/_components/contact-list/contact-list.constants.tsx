import { Contact } from '@modules/(contact)/_model/contact';
import type { MRT_ColumnDef } from 'material-react-table';

import FumyLink from '@/components/fumy-link';
import { contactsPath } from '@/routes';

export const columns: Array<MRT_ColumnDef<Contact>> = [
  {
    header: 'Họ và tên',
    accessorKey: 'name',
    Cell: ({ renderedCellValue, row }) => {
      return <FumyLink href={`${contactsPath}/${row.original.id}`}>{renderedCellValue}</FumyLink>;
    }
  },
  {
    header: 'CMND/CCCD',
    accessorKey: 'identityCard',
    Cell: ({ renderedCellValue, row }) => {
      return <FumyLink href={`${contactsPath}/${row.original.id}`}>{renderedCellValue}</FumyLink>;
    }
  },
  {
    header: 'Số điện thoại',
    accessorKey: 'phone',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Email',
    accessorKey: 'email',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Số điện thoại',
    accessorKey: 'phone',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Số thẻ',
    accessorKey: 'bankCard.cardNumber',
    Cell: ({ renderedCellValue }) => renderedCellValue
  },
  {
    header: 'Chi nhánh',
    accessorKey: 'bankCard.cardBranch',
    Cell: ({ renderedCellValue }) => renderedCellValue
  }
];
