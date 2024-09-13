import { Server } from '@modules/(services)/_models';
import { Type } from 'class-transformer';
import { Dayjs } from 'dayjs';
import 'reflect-metadata';

import { TransactionType } from '../../_enums/transaction-type';

export class Transaction {
  id: string;
  userBotId: string;
  name: string = '';
  amount: number = 0;
  transactionType: TransactionType = TransactionType.INCOME;

  @Type(() => String)
  transactionAt: Dayjs;

  @Type(() => Server)
  userBot: Server;
}
