import { Customer } from '@modules/(customer)/_models/customer';
import { Expose, Type } from 'class-transformer';
import { ArrayMinSize, IsDefined, ValidateNested } from 'class-validator';

import { MergeCustomer } from './merge-customer';

export class UserRequestData {
  @Type(() => Customer)
  @IsDefined({ message: 'Khách hàng không được để trống.' })
  public customer: Customer;

  @Expose()
  public get customerId() {
    return this.customer?.id;
  }

  public id: string;

  public merchantId: string;

  @Type(() => MergeCustomer)
  @ArrayMinSize(1, { message: 'Danh sách khách hàng không được để trống.' })
  @ValidateNested({ each: true })
  public mergeCustomerLeafs: Array<MergeCustomer>;

  public requestId: string;
}
