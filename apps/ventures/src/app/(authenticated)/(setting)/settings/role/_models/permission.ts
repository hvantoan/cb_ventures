import { Exclude, Type } from 'class-transformer';
import 'reflect-metadata';

export class Permission {
  public id: string;

  public name: string;

  public isEnable: boolean;

  @Type(() => Permission)
  public items: Array<Permission>;

  @Exclude({ toPlainOnly: true })
  HasChildEnable() {
    if (this.items?.length) return false;
    return this.items.some((o) => o.isEnable);
  }
}
