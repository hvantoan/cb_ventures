declare type BaseListRequest = {
  pageIndex: number;
  pageSize: number;
  isCount?: boolean;
  searchText?: string;
  firstItemId?: string;
  isAll?: boolean;
  includeDeleted?: boolean;
  startDate?: string;
  endDate?: string;
};
