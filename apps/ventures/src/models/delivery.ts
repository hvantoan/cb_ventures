import { Exclude } from 'class-transformer';
import { Matches, MaxLength } from 'class-validator';
import { nanoid } from 'nanoid';

import type { AdministrativeUnit } from '@/models/administrative-unit';

export class Delivery {
  constructor() {
    this.id = nanoid(32);
  }

  public id: string = '';

  public name: string = '';

  @Matches(/[\s\\+-;\b|]|^$/, { message: 'Số điện thoại không hợp lệ.' })
  public phone: string = '';

  public province: Nullable<AdministrativeUnit> = null;
  public district: Nullable<AdministrativeUnit> = null;
  public commune: Nullable<AdministrativeUnit> = null;

  @MaxLength(255, { message: 'Địa chỉ dài không quá 255 ký tự.' })
  public address: string = '';

  @Exclude({ toPlainOnly: true })
  public get fullAddress(): string {
    const addresses = [this.address, this.commune?.name, this.district?.name, this.province?.name];
    return addresses.filter(Boolean).join(', ');
  }
}
