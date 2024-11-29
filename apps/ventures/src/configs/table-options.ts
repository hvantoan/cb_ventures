import { NoRecordView } from '@hvantoan/ui/components/no-record-view';
import { dataGridLocalization } from '@hvantoan/ui/constants/localization';
import type { MRT_TableOptions } from 'material-react-table';
import { createElement } from 'react';

export const tableOptions: Partial<MRT_TableOptions<any>> = {
  paginationDisplayMode: 'pages',
  muiPaginationProps: {
    variant: 'outlined',
    shape: 'rounded',
    color: 'info'
  },
  manualPagination: true,
  manualFiltering: true,
  enableSorting: false,
  enableGlobalFilter: false,
  localization: dataGridLocalization,
  renderEmptyRowsFallback: () => createElement(NoRecordView),
  muiTableContainerProps: {
    className: 'overflow-x-auto'
  },
  displayColumnDefOptions: {
    'mrt-row-expand': {
      header: '',
      size: 60,
      maxSize: 60,
      minSize: 60
    }
  },
  muiColumnActionsButtonProps: {
    size: 'small'
  }
};
