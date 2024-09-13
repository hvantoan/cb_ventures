import dayjs from 'dayjs';

import { QueryTransactionFilter } from '../_types/transaction-filter';

export const getDefaultTransactionFilter = (): QueryTransactionFilter => {
  return {
    pageIndex: 0,
    pageSize: 15,
    endDate: dayjs().endOf('date').toISOString(),
    startDate: dayjs().startOf('month').startOf('date').toISOString(),
    isCount: true
  };
};
