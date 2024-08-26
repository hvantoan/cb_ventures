export const getDefaultListFilters = (): BaseListRequest => ({
  pageIndex: 0,
  pageSize: 20,
  isCount: false,
  includeDeleted: true,
  searchText: ''
});
