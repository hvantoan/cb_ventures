export enum TransactionType {
  INCOME = 1,
  OUTCOME = 2
}

export const TransactionTypeMap: Record<TransactionType, string> = {
  [TransactionType.INCOME]: 'Nạp',
  [TransactionType.OUTCOME]: 'Rút'
};
