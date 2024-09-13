export enum TransactionType {
  Profit = 1,
  Income = 2,
  Outcome = 3
}

export const TransactionTypeMap: Record<TransactionType, string> = {
  [TransactionType.Profit]: 'Lợi nhuận',
  [TransactionType.Income]: 'Nạp',
  [TransactionType.Outcome]: 'Rút'
};
