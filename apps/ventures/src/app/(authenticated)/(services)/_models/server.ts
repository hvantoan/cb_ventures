import { Bot } from '@modules/(category)/_models/bot';
import { User } from '@modules/(setting)/settings/users/_models/user';
import { Type } from 'class-transformer';
import { IsNotEmpty, Max, Min } from 'class-validator';
import { Dayjs } from 'dayjs';

import { Transaction } from '../transactions/_models/transaction';

export class Server {
  id: string = '';
  userId: string = '';
  botId: string = '';

  @IsNotEmpty({ message: 'ID MT4 không được để trống.' })
  brokerServer: string;

  @IsNotEmpty({ message: 'ID MT4 không được để trống.' })
  @Min(1, { message: 'ID MT4 không hợp lệ.' })
  @Max(9999999999, { message: 'ID MT4 không hợp lệ.' })
  iD_MT4: number = 0;

  passView?: string;
  passWeb?: string;

  balance: number = 0;

  @Type(() => String)
  createAt: Dayjs;

  @Min(1, { message: 'EV không hợp lệ.' })
  @Max(999, { message: 'EV không hợp lệ.' })
  ev: number = 0;
  @Min(1, { message: 'Ref không hợp lệ.' })
  @Max(999, { message: 'Ref không hợp lệ.' })
  ref: number = 0;

  @Type(() => User)
  @IsNotEmpty({ message: 'Người dùng không được để trống.' })
  user: User;

  @Type(() => Bot)
  @IsNotEmpty({ message: 'BOT không được để trống.' })
  bot: Bot;

  @Type(() => Array<Transaction>)
  transactions: Transaction[];
}
