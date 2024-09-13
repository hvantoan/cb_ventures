export type QueryTransactionFilter = BaseListRequest & {
  customerId?: string;
  isDeleted?: boolean;
};
