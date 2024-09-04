export enum ERequestStatus {
  /**
   * @description Chưa thực hiện
   */
  Pending = 1,

  /**
   * @description Đang thực hiện
   */
  InProgress = 2,

  /**
   * @description Đã thực hiện
   */
  Success = 3,

  /**
   * @description Đang hoàn tác
   */
  InRevoking = 4,

  /**
   * @description Đã hoàn tác
   */
  Revoked = 5,

  /**
   * @description Lỗi
   */
  Error = 6
}

export const ERequestStatusLabel: Record<ERequestStatus, string> = {
  [ERequestStatus.Pending]: 'Chưa thực hiện',
  [ERequestStatus.InProgress]: 'Đang thực hiện',
  [ERequestStatus.Success]: 'Đã thực hiện',
  [ERequestStatus.InRevoking]: 'Đang hoàn tác',
  [ERequestStatus.Revoked]: 'Đã hoàn tác',
  [ERequestStatus.Error]: 'Lỗi'
};
