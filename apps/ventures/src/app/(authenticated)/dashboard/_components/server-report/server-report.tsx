'use client';

import { toCurrency } from '@fumy/utilities/helpers/number-formatter';
import { QuantityDisplay } from '@modules/_components/numeric-display';
import { type ServerReport } from '@modules/dashboard/_models/server-report';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef, MRT_TableContainer, useMaterialReactTable } from 'material-react-table';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_SERVER_REPORT_CHART_ENDPOINT } from '@/query/internal-endpoints';
import { SERVER_REPORT_QK } from '@/query/query-keys';

import ChartCard from '../chart-card';

const ServerReports: React.FC = () => {
  const { data, isFetching } = useQuery<BaseResponse<Array<ServerReport>>>({
    queryKey: [SERVER_REPORT_QK],
    queryFn: async () =>
      (await clientInstance.get<BaseResponse<Array<ServerReport>>>(INTERNAL_SERVER_REPORT_CHART_ENDPOINT)).data,
    placeholderData: keepPreviousData
  });
  const columns: Array<MRT_ColumnDef<ServerReport>> = [
    {
      header: 'Bot',
      accessorKey: 'userBot.user.name'
    },
    {
      header: 'Vốn (USD)',
      accessorKey: 'beforeBalance',
      Cell: ({ row }) => <QuantityDisplay value={row.original.beforeBalance} suffix=' $' />,
      maxSize: 50,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    },
    {
      header: 'Nạp thêm',
      accessorKey: 'deposit',
      Cell: ({ row }) => toCurrency(row.original.deposit),
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
    },
    {
      header: 'Tổng vốn',
      accessorKey: 'affterBalance',
      Cell: ({ row }) => toCurrency(row.original.deposit),
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
    },
    {
      header: 'Lợi nhuận (UC)',
      accessorKey: 'profit',
      Cell: ({ row }) => <QuantityDisplay value={row.original.profit} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
    },
    {
      header: 'Lợi nhuận (%)',
      accessorKey: 'profitPercent',
      Cell: ({ row }) => <QuantityDisplay value={row.original.profitPercent} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
    },
    {
      header: 'Lãi thực nhận',
      accessorKey: 'profitActual',
      Cell: ({ row }) => <QuantityDisplay value={row.original.profit} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
    },
    {
      header: 'Tổng tài sản (UC)',
      accessorKey: 'beforeAsset',
      Cell: ({ row }) => <QuantityDisplay value={row.original.beforeAsset} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    },
    {
      header: 'Tổng rút (UC)',
      accessorKey: 'withdrawal',
      Cell: ({ row }) => <QuantityDisplay value={row.original.withdrawal} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    },
    {
      header: 'Tổng tài sản còn lại (UC)',
      accessorKey: 'affterAsset',
      Cell: ({ row }) => <QuantityDisplay value={row.original.affterAsset} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    },
    {
      header: 'Lợi nhuận Team',
      id: 'team',
      accessorKey: '',
      Cell: ({ row }) => <QuantityDisplay value={row.original.profit - row.original.profitActual} />,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    }
  ];
  const table = useMaterialReactTable({
    data: data?.data || [],
    columns,
    enableColumnActions: false,
    enableSorting: false,
    enableCellActions: false,
    enableStickyHeader: true,
    state: {
      showSkeletons: isFetching
    },
    muiTableContainerProps: {
      className: 'md:overflow-y-auto md:max-h-[360px]'
    }
  });

  return (
    <ChartCard className='!p-0'>
      <MRT_TableContainer table={table} />
    </ChartCard>
  );
};

export default ServerReports;
