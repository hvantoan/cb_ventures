'use client';

import { QuantityDisplay } from '@modules/_components/numeric-display';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { MRT_ColumnDef, MRT_TableContainer, useMaterialReactTable } from 'material-react-table';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_BOT_REPORT_CHART_ENDPOINT } from '@/query/internal-endpoints';
import { BOT_REPORT_QK } from '@/query/query-keys';

import ChartCard from '../chart-card';

const BotReports: React.FC = () => {
  const { data, isFetching } = useQuery<BaseResponse<Array<BotReport>>>({
    queryKey: [BOT_REPORT_QK],
    queryFn: async () =>
      (await clientInstance.get<BaseResponse<Array<BotReport>>>(INTERNAL_BOT_REPORT_CHART_ENDPOINT)).data,
    placeholderData: keepPreviousData
  });
  const columns: Array<MRT_ColumnDef<BotReport>> = [
    {
      header: 'Bot',
      accessorKey: 'bot.name'
    },

    {
      header: 'Vốn tối thiểu',
      accessorKey: 'balance',
      Cell: ({ row }) => <QuantityDisplay value={row.original.balance} suffix=' $' />,
      maxSize: 50,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    },
    {
      header: 'Lợi nhuận',
      accessorKey: 'profit',
      Cell: ({ row }) => (
        <QuantityDisplay
          value={row.original.profit}
          className={`${Number(row.original.profit) >= 0 ? 'text-success-light' : 'text-red-500'}`}
          suffix=' $'
        />
      ),
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
    },
    {
      header: '% Lợi nhuận',
      accessorKey: 'profitPercent',
      Cell: ({ row }) => (
        <QuantityDisplay
          value={row.original.profitPercent}
          className={`${Number(row.original.profit) >= 0 ? 'text-success-light' : 'text-red-500'}`}
          suffix='%'
        />
      ),
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      },
      maxSize: 60
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

export default BotReports;
