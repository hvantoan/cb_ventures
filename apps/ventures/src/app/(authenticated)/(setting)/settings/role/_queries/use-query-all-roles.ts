import { Role } from '@modules/(setting)/settings/role/_models/role';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { ROLE_QK } from '@/query/query-keys';

import { getAllRolesAction } from '../_actions/get-all-roles-action';

const select = (input: BaseResponse<BaseListData<Role>>) => plainToInstance(Role, input.data.items);

export const useQueryAllRoles = () => {
  return useQuery({
    queryKey: [ROLE_QK],
    queryFn: async () => getAllRolesAction(),
    select
  });
};
