import { Customer } from '@modules/(customer)/_models/customer';
import { Expose, Type } from 'class-transformer';
import { IsDefined } from 'class-validator';

import { ERequestStatus } from '../_enums/request-status';

export class MergeCustomer {
  constructor(mergeCustomerId?: string) {
    if (mergeCustomerId) {
      this.mergeCustomerId = mergeCustomerId;
    }
  }

  @Type(() => Customer)
  @IsDefined({ message: 'Khách hàng không được để trống.' })
  public customer: Customer;

  @Expose()
  public get customerId() {
    return this.customer?.id;
  }

  public id: string;

  public mergeCustomerId: string;

  public status: ERequestStatus;
}
