import { Server } from '@modules/(services)/_models';

export class ServerReport {
  month: number;
  year: number;

  beforeBalance: number;
  deposit: number;
  affterBalance: number;

  profit: number;
  profitPercent: number;
  profitActual: number;

  beforeAsset: number;
  withdrawal: number;
  affterAsset: number;
  commission: number;
  userBot: Server;
}
