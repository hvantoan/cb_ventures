'use client';

import { Typography, useTheme } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import { Chart } from 'react-chartjs-2';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_REVENUE_CHART_ENDPOINT } from '@/query/internal-endpoints';
import { REVENUE_CHART_QK } from '@/query/query-keys';

import ChartCard from '../chart-card';

const CHART_TITLE = 'Doanh số';

ChartJs.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const SaleChart: React.FC = () => {
  const { data } = useQuery<BaseResponse<Array<RevenueChartDto>>>({
    queryKey: [REVENUE_CHART_QK],
    queryFn: async () =>
      (await clientInstance.get<BaseResponse<Array<RevenueChartDto>>>(INTERNAL_REVENUE_CHART_ENDPOINT)).data,
    placeholderData: keepPreviousData
  });
  const theme = useTheme();

  const chartOptions: ChartOptions = useMemo(
    () => ({
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      },
      maintainAspectRatio: false,
      locale: 'vi',
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            generateLabels: () => {
              return [
                {
                  text: 'Doanh thu',
                  pointStyle: 'rect',
                  fillStyle: theme.palette.primary.main,
                  strokeStyle: theme.palette.primary.main
                },
                { text: 'Đơn hàng', pointStyle: 'line', strokeStyle: theme.palette.warning.main }
              ];
            }
          }
        },
        tooltip: {
          usePointStyle: true,
          callbacks: {
            labelPointStyle: (tooltipItem) =>
              tooltipItem.datasetIndex === 1
                ? { pointStyle: 'rect', rotation: 0 }
                : { pointStyle: 'line', rotation: 0 },
            label: (context) => {
              return context.datasetIndex === 0
                ? `Đơn hàng: ${context.parsed.y}`
                : `Doanh thu: ${context.parsed.y} (triệu đồng)`;
            }
          },
          backgroundColor: '#ffffffDF',
          titleColor: '#000',
          bodyColor: '#000',
          boxPadding: 8
        }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Doanh thu (triệu đồng)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false
          }
        }
      }
    }),
    [theme]
  );

  const series = useMemo<ChartData>(
    () => ({
      labels: data?.data?.map(({ date }) => dayjs(date).format('DD/MM')) || [],
      datasets: [
        {
          type: 'line',
          data: data?.data?.map(({ count }) => count) || [0],
          label: 'Đơn hàng',
          borderColor: theme.palette.warning.main,
          yAxisID: 'y1',
          pointStyle: 'circle',
          borderWidth: 1.5,
          tension: 0.2
        },
        {
          type: 'bar',
          data: data?.data?.map(({ total }) => total) || [0],
          label: 'Doanh thu',
          backgroundColor: theme.palette.primary.main,
          yAxisID: 'y',
          pointStyle: 'rect'
        }
      ]
    }),
    [data]
  );

  return (
    <ChartCard className='h-[400px]'>
      <Typography variant='h6'>{CHART_TITLE}</Typography>
      <div>
        <Chart type='bar' data={series} options={chartOptions} width='100%' height={340} />
      </div>
    </ChartCard>
  );
};

export default SaleChart;
