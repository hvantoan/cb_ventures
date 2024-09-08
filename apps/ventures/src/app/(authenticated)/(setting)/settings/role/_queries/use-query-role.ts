import { getRoleAction } from '@modules/(setting)/settings/role/_actions/get-role-action';
import { Role } from '@modules/(setting)/settings/role/_models/role';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { ROLE_QK } from '@/query/query-keys';

const select = (input: BaseResponse<Role>) => plainToInstance(Role, input.data);

export const useQueryRole = (roleId?: string) => {
  return useQuery({
    queryKey: [ROLE_QK, roleId],
    queryFn: async ({ queryKey: [, id] }) => getRoleAction(id as string),
    select,
    enabled: Boolean(roleId)
  });
};
