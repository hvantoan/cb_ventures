export type QueryTransactionFilter = BaseListRequest & {
  userBotId?: string | null;
  isDeleted?: boolean;
};
