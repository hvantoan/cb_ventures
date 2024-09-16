import DefaultProductImage from '@fumy/ui/assets/images/product-default.png';
import { Bot } from '@modules/(category)/_models/bot';
import type { MRT_ColumnDef } from 'material-react-table';
import Image from 'next/image';

import FumyLink from '@/components/fumy-link';
import { botsPath } from '@/routes';

export const columns: Array<MRT_ColumnDef<Bot>> = [
  {
    header: 'Hình bot',
    accessorKey: 'avatar',
    size: 100,
    Cell: ({ row }) => (
      <Image
        src={row.original.avatar?.image || DefaultProductImage}
        alt='bot-image'
        width={480}
        height={480}
        quality={100}
        className='max-h-[75px] w-auto max-w-[75px] rounded-lg object-contain'
      />
    ),
    muiTableHeadCellProps: {
      align: 'left'
    },
    muiTableBodyCellProps: {
      align: 'left'
    }
  },
  {
    header: 'Tên bot',
    accessorKey: 'name',
    Cell: ({ renderedCellValue, row }) => {
      return <FumyLink href={`${botsPath}/${row.original.id}`}>{renderedCellValue}</FumyLink>;
    }
  },
  {
    header: 'Mô tả',
    accessorKey: 'description',
    Cell: ({ renderedCellValue }) => renderedCellValue
  }
];
