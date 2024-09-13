import { Type } from 'class-transformer';
import { Dayjs } from 'dayjs';
import 'reflect-metadata';

import { TransactionType } from '../_enums/transaction-type';
import { Account } from './account';

export class Transaction {
  id: string;
  accountId: string;

  bankCardId: string;

  name: string = '';

  public amount: number = 0;

  public transactionType: TransactionType = TransactionType.INCOME;

  @Type(() => String)
  transactionDate: Dayjs;

  @Type(() => Account)
  account: Account;
}
