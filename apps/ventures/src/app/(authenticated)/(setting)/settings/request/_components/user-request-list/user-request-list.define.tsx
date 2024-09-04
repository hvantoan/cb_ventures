import { DATE_TIME_FORMAT } from '@fumy/utilities/constants';
import { ERequestStatus } from '@modules/(setting)/settings/request/_enums/request-status';
import { Chip } from '@mui/material';
import { MRT_ColumnDef } from 'material-react-table';

import FumyLink from '@/components/fumy-link';
import { settingRequestPath } from '@/routes';

import { UserRequest } from '../../_models/user-request';

export const columns: Array<MRT_ColumnDef<UserRequest>> = [
  {
    header: 'Ngày tạo',
    accessorKey: 'createdDate',
    Cell: ({ row }) => row?.original.createdDate.format(DATE_TIME_FORMAT),
    enableGlobalFilter: false,
    size: 160
  },
  {
    header: 'Mã yêu cầu',
    accessorKey: 'code',
    Cell: ({ row, renderedCellValue }) => (
      <FumyLink href={`${settingRequestPath}/${row?.original.id}`}>{renderedCellValue}</FumyLink>
    ),
    enableGlobalFilter: true
  },
  {
    header: 'Loại yêu cầu',
    accessorKey: 'type',
    Cell: ({ row }) => row?.original.displayType,
    enableGlobalFilter: false,
    size: 160
  },
  {
    header: 'Nội dung',
    accessorKey: 'content',
    muiTableBodyCellProps: {
      className: 'whitespace-normal'
    },
    size: 120,
    Cell: ({ renderedCellValue }) => <div className='line-clamp-2'>{renderedCellValue}</div>,
    enableGlobalFilter: false
  },
  {
    header: 'Người tạo',
    accessorKey: 'createdName',
    enableGlobalFilter: false
  },
  {
    header: 'Người thực hiện/hoàn tác',
    accessorKey: 'progressName',
    enableGlobalFilter: false,
    Cell: ({ row }) => row?.original.revokeName ?? row?.original.progressName ?? '',
    size: 140
  },
  {
    header: 'Trạng thái',
    accessorKey: 'status',
    enableGlobalFilter: false,
    muiTableBodyCellProps: {
      align: 'center',
      className: 'align-middle'
    },
    muiTableHeadCellProps: {
      align: 'center'
    },
    Cell: ({ row }) => {
      switch (row?.original.status) {
        case ERequestStatus.Pending:
          return <Chip label='Chưa thực hiện' color='default' className='w-[110px] [&>.MuiChip-label]:px-1' />;
        case ERequestStatus.InProgress:
          return <Chip label='Đang thực hiện' color='primary' className='w-[110px] [&>.MuiChip-label]:px-1' />;
        case ERequestStatus.InRevoking:
          return <Chip label='Đang hoàn tác' color='warning' className='w-[110px] [&>.MuiChip-label]:px-1' />;
        case ERequestStatus.Revoked:
          return <Chip label='Đã hoàn tác' color='info' className='w-[110px] [&>.MuiChip-label]:px-1' />;
        case ERequestStatus.Error:
          return <Chip label='Lỗi' color='error' className='w-[110px] [&>.MuiChip-label]:px-1' />;
        case ERequestStatus.Success:
          return <Chip label='Đã thực hiện' color='success' className='w-[110px] [&>.MuiChip-label]:px-1' />;
        default:
          return null;
      }
    }
  }
];
