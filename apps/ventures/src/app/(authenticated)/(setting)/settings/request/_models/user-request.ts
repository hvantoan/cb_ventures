import { UserRequestData } from '@modules/(setting)/settings/request/_models/user-request-data';
import { Exclude, Transform, Type } from 'class-transformer';
import { IsDefined, Matches, MaxLength, ValidateIf, ValidateNested } from 'class-validator';
import dayjs, { type Dayjs, isDayjs } from 'dayjs';

import { ERequestStatus } from '../_enums/request-status';
import { ERequestType } from '../_enums/request-type';

export class UserRequest {
  constructor(createdName: string) {
    this.createdName = createdName;
  }

  public id: string = '';

  @MaxLength(50, { message: 'Mã yêu cầu dài không quá 50 ký tự.' })
  @Matches(/^[a-zA-Z0-9.\-_]+$/, { message: 'Mã yêu cầu không hợp lệ.' })
  @ValidateIf((_, value) => value?.length > 0)
  public code: string = '';

  @IsDefined({
    message: 'Loại yêu cầu không được để trống.'
  })
  public type: ERequestType = ERequestType.MergeCustomer;

  public status: ERequestStatus = ERequestStatus.Pending;

  @MaxLength(2000, {
    message: 'Nội dung yêu cầu dài không quá 2000 ký tự.'
  })
  public content: string = '';

  public createdBy: string = '';

  @Transform(({ value }) => (value ? (value as Dayjs)?.toISOString() : null), { toPlainOnly: true })
  @Transform(
    ({ value }) => {
      if (!value) return null;
      return isDayjs(value) ? value : dayjs(value as string);
    },
    {
      toClassOnly: true
    }
  )
  @Type(() => String)
  public createdDate: Dayjs;

  public progressBy: string = '';

  @Transform(({ value }) => (value ? (value as Dayjs)?.toISOString() : null), { toPlainOnly: true })
  @Transform(
    ({ value }) => {
      if (!value) return null;
      return isDayjs(value) ? value : dayjs(value as string);
    },
    {
      toClassOnly: true
    }
  )
  @Type(() => String)
  public progressDate: Dayjs;

  public revokeBy: string = '';

  @Transform(({ value }) => (value ? (value as Dayjs)?.toISOString() : null), { toPlainOnly: true })
  @Transform(
    ({ value }) => {
      if (!value) return null;
      return isDayjs(value) ? value : dayjs(value as string);
    },
    {
      toClassOnly: true
    }
  )
  @Type(() => String)
  public revokeDate: Dayjs;

  @Type(() => UserRequestData)
  @ValidateNested()
  public data: UserRequestData;

  public hasProgress: boolean = false;

  public createdName: string = '';

  public progressName: string = '';

  public revokeName: string = '';

  @Exclude({ toPlainOnly: true })
  public get displayType() {
    switch (this.type) {
      case ERequestType.MergeCustomer:
        return 'Gộp khách hàng';
      default:
        return '';
    }
  }

  @Exclude({ toPlainOnly: true })
  public get canSave() {
    return this.status === ERequestStatus.Pending;
  }

  @Exclude({ toPlainOnly: true })
  public get canProcess() {
    return Boolean(this.id) && this.hasProgress && !this.progressBy && this.status === ERequestStatus.Pending;
  }

  @Exclude({ toPlainOnly: true })
  public get canRevoke() {
    return Boolean(this.id) && this.hasProgress && Boolean(this.progressBy) && this.status === ERequestStatus.Success;
  }

  @Exclude({ toPlainOnly: true })
  public get canRemove() {
    return Boolean(this.id) && this.status === ERequestStatus.Pending;
  }
}
