import dayjs from 'dayjs';

import { QueryServerFilter } from '../_types/server-filter';

export const getDefaultServerFilter = (): QueryServerFilter => {
  return {
    pageIndex: 0,
    pageSize: 15,
    endDate: dayjs().endOf('date').toISOString(),
    startDate: dayjs().startOf('month').startOf('date').toISOString(),
    isCount: true,
    includeDeleted: false
  };
};
