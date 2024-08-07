declare interface BaseResponse<T = undefined> {
  success: boolean;
  message?: string;
  data: T;
}

declare interface BaseListData<T> {
  count: number;
  items: Array<T>;
}
