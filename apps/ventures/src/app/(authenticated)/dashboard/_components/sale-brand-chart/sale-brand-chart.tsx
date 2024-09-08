'use client';

import { DateRangeField } from '@fumy/ui/components';
import { useToggle } from '@fumy/utilities/hooks';
import ChartCard from '@modules/dashboard/_components/chart-card';
import { Typography, useMediaQuery } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { ArcElement, Chart, Chart as ChartJS, ChartData, ChartOptions, Legend, PieController, Tooltip } from 'chart.js';
import dayjs from 'dayjs';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useForm, useWatch } from 'react-hook-form';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_SALE_BRAND_CHART_ENDPOINT } from '@/query/internal-endpoints';
import { SALE_BRAND_CHART_QK } from '@/query/query-keys';

import SaleBrandDetailDialog from './sale-brand-detail-dialog';

const START_DATE_NAME = 'from';
const END_DATE_NAME = 'to';
const TITLE = 'Doanh số theo thương hiệu';

const defaultTimeRange = {
  [START_DATE_NAME]: dayjs().subtract(1, 'month').startOf('date'),
  [END_DATE_NAME]: dayjs().endOf('date')
};

ChartJS.register(ArcElement, Tooltip, Legend, PieController);

const useGetChartOptions = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return useMemo<ChartOptions<'pie'>>(
    () => ({
      plugins: {
        legend: {
          display: true,
          position: isMobile ? 'bottom' : 'right',
          labels: {
            usePointStyle: true,
            boxWidth: 12,
            borderRadius: 8
          }
        },
        tooltip: {
          boxPadding: 8,
          usePointStyle: true,
          callbacks: {
            label: (tooltipItem) => {
              return `${tooltipItem.raw} bao` as string;
            }
          },
          backgroundColor: '#ffffffDF',
          titleColor: '#000',
          bodyColor: '#000'
        }
      },
      locale: 'vi',
      responsive: true,
      maintainAspectRatio: false
    }),
    [isMobile]
  );
};

const SaleBrandChart: React.FC = () => {
  const { isOpen, handleClose, handleOpen } = useToggle();
  const [dialogData, setDialogData] = useState<SaleBrandData | null | undefined>(null);
  const { control } = useForm({
    defaultValues: {
      from: defaultTimeRange.from.toDate(),
      to: defaultTimeRange.to.toDate()
    }
  });
  const chartRef = useRef<Chart<'pie'>>(null);

  const filter = useWatch({ control, name: [START_DATE_NAME, END_DATE_NAME] });
  const queryKeys = useMemo(() => [filter[0]?.toISOString(), filter[1]?.toISOString()], [filter]);
  const { data } = useQuery<BaseResponse<SaleBrandChartDto>>({
    queryKey: [SALE_BRAND_CHART_QK, queryKeys[0], queryKeys[1]],
    queryFn: async () =>
      (
        await clientInstance.post<BaseResponse<SaleBrandChartDto>>(INTERNAL_SALE_BRAND_CHART_ENDPOINT, {
          [START_DATE_NAME]: queryKeys[0],
          [END_DATE_NAME]: queryKeys[1]
        })
      ).data,
    enabled: queryKeys[0] !== queryKeys[1],
    placeholderData: keepPreviousData
  });
  const options = useGetChartOptions();

  const series = useMemo<ChartData<'pie'>>(() => {
    return {
      type: 'pie',
      labels: data?.data?.summarySaleByBrandChartData.map((item) => item.type) || [],
      datasets: [
        {
          data: data?.data?.summarySaleByBrandChartData.map((item) => item.value) || [],
          backgroundColor: ['#86ce24', '#00a2e6', '#fac810', '#7d8f8c', '#d06b20', '#958b8b']
        }
      ]
    };
  }, [data?.data]);

  const handleClick = useCallback<React.MouseEventHandler<HTMLCanvasElement>>(
    (e) => {
      const element = chartRef.current!.getElementsAtEventForMode(
        e as unknown as Event,
        'nearest',
        { intersect: true },
        false
      );
      const index = element[0]?.index;
      if (index === undefined) return;
      const target = data?.data?.summarySaleByBrandChartData[index]!;
      const products = Array.from(new Set(target?.details.map((x) => x.productName)));
      const productMap = products.map<SaleBrandData['details'][0]>((productName) => {
        const quantity = target.details
          .filter((x) => x.productName === productName)
          .reduce((a, b) => a + b.quantity, 0);
        return { productName, quantity };
      });
      setDialogData({ ...target, details: productMap });
      handleOpen();
    },
    [data?.data]
  );
  return (
    <>
      <ChartCard>
        <div className='flex flex-col justify-between gap-2 md:flex-row md:items-center md:gap-0'>
          <Typography variant='h6'>{TITLE}</Typography>
          <DateRangeField control={control} startDateName={START_DATE_NAME} endDateName={END_DATE_NAME} />
        </div>
        <div className='mt-2 flex items-center'>
          <Pie data={series} height={280} options={options} onClick={handleClick} ref={chartRef} />
        </div>
      </ChartCard>
      <SaleBrandDetailDialog data={dialogData} handleClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default SaleBrandChart;
