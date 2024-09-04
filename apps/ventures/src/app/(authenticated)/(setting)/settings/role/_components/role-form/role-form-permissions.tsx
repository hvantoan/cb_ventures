'use client';

import PermissionItem from '@modules/(setting)/settings/role/_components/role-form/permission-item';
import { Role } from '@modules/(setting)/settings/role/_models/role';
import { Card, CardContent, CardHeader } from '@mui/material';
import { SimpleTreeView } from '@mui/x-tree-view';
import { Control, FieldArrayPath, useFieldArray } from 'react-hook-form';

const TITLE = 'Phân quyền';
interface RoleFormPermissionsProps {
  control: Control<Role>;
  name?: FieldArrayPath<Role>;
}

const RoleFormPermissions: React.FC<RoleFormPermissionsProps> = ({ control }) => {
  const { fields } = useFieldArray<Role>({ name: 'permissions', control });

  return (
    <Card className='w-full flex-grow'>
      <CardHeader title={TITLE} />
      <CardContent>
        <SimpleTreeView itemChildrenIndentation='24px'>
          {fields?.map((field, index) => (
            <PermissionItem key={field.id} control={control} name={`permissions.${index}`} />
          ))}
        </SimpleTreeView>
      </CardContent>
    </Card>
  );
};

export default RoleFormPermissions;
