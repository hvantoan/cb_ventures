import { Server } from '@modules/(services)/_models';
import { Type } from 'class-transformer';
import { IsNotEmpty, Min } from 'class-validator';
import { Dayjs } from 'dayjs';

import { TransactionType } from '../../_enums/transaction-type';

export class Transaction {
  id: string = '';

  userBotId?: string = '';
  name?: string = '';

  @Type(() => Number)
  @Min(1, { message: 'Số tiền phải lớn hơn 0' })
  amount: number = 0;

  @Type(() => String)
  @IsNotEmpty({ message: 'Loại giao dịch không được để trống' })
  transactionType: TransactionType = TransactionType.Income;

  @Type(() => String)
  transactionAt?: Dayjs;

  @Type(() => Server)
  userBot?: Server;
}
