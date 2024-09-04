'use client';

import { QuantityDisplay } from '@modules/_components/numeric-display';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MRT_ColumnDef, MRT_TableContainer, useMaterialReactTable } from 'material-react-table';

import { TOP_PRODUCTS_QK } from '@/query/query-keys';

import ChartCard from '../chart-card';

const HotCoins: React.FC = () => {
  const { data, isFetching } = useQuery<Array<HotCoinsDto>>({
    queryKey: [TOP_PRODUCTS_QK],
    queryFn: async () => (await axios.get('https://api.binance.com/api/v3/ticker/24hr')).data
  });

  const { data: res } = useQuery<any>({
    queryKey: [TOP_PRODUCTS_QK],
    queryFn: async () => (await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')).data
  });

  const columns: Array<MRT_ColumnDef<HotCoinsDto>> = [
    {
      header: 'Mã',
      accessorKey: 'symbol'
    },
    {
      header: 'Giá',
      accessorKey: 'lastPrice',
      Cell: ({ row }) => <QuantityDisplay value={Number(row.original.lastPrice) / Number(res.price)} />,
      maxSize: 50,
      muiTableBodyCellProps: {
        align: 'right'
      },
      muiTableHeadCellProps: {
        align: 'right'
      }
    },
    {
      header: 'Tỷ lệ thay đổi',
      accessorKey: 'priceChangePercent',
      Cell: ({ row }) => (
        <QuantityDisplay
          value={row.original.priceChangePercent}
          className={`${Number(row.original.priceChangePercent) > 0 ? 'text-success-light' : 'text-red-500'}`}
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
    data: data?.slice(0, 3) || [],
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

export default HotCoins;
