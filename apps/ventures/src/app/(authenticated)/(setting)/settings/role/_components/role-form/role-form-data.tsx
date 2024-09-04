import { useQueryPermissions } from '@modules/(setting)/settings/role/_queries/use-query-permissions';
import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';

import { Role } from '../../_models/role';
import { useQueryRole } from '../../_queries/use-query-role';

interface RoleFormDataProps {
  roleId?: string;
  reset: UseFormReset<Role>;
}

const RoleFormData: React.FC<RoleFormDataProps> = ({ roleId, reset }) => {
  const { data: role } = useQueryRole(roleId);
  const { data: permissions } = useQueryPermissions(!roleId);

  useEffect(() => {
    if (role) {
      reset(role);
    }
  }, [role]);

  useEffect(() => {
    if (!roleId && permissions) {
      reset({ permissions });
    }
  }, [permissions, roleId]);

  return null;
};

export default RoleFormData;
