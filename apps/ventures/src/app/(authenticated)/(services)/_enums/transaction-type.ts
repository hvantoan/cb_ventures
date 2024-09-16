export enum ETransactionType {
  Profit = 1,
  Income = 2,
  Outcome = 3
}

export const TransactionTypeMap: Record<ETransactionType, string> = {
  [ETransactionType.Profit]: 'Lợi nhuận',
  [ETransactionType.Income]: 'Nạp',
  [ETransactionType.Outcome]: 'Rút'
};
