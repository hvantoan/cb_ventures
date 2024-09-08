import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { PERMISSION_QK, ROLE_QK } from '@/query/query-keys';

import { getPermissionsAction } from '../_actions/get-permissions-action';
import { Permission } from '../_models/permission';

const select = (input: BaseResponse<BaseListData<Permission>>) => plainToInstance(Permission, input.data.items);

export const useQueryPermissions = (enabled = true) => {
  return useQuery({
    queryKey: [ROLE_QK, PERMISSION_QK],
    queryFn: async () => getPermissionsAction(),
    select,
    enabled
  });
};
