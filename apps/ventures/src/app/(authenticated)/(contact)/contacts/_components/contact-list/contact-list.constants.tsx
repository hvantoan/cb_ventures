import { Contact } from '@modules/(contact)/_model/contact';
import type { MRT_ColumnDef } from 'material-react-table';

import FumyLink from '@/components/fumy-link';
import { contactPath } from '@/routes';

export const columns: Array<MRT_ColumnDef<Contact>> = [
  {
    header: 'Họ và tên',
    accessorKey: 'name',
    Cell: ({ renderedCellValue, row }) => {
      return <FumyLink href={`${contactPath}/${row.original.id}`}>{renderedCellValue}</FumyLink>;
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
  }
];
