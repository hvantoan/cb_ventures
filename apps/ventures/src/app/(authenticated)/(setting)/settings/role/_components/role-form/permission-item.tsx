'use client';

import { Permission } from '@modules/(setting)/settings/role/_models/permission';
import { Role } from '@modules/(setting)/settings/role/_models/role';
import Checkbox from '@mui/material/Checkbox';
import {
  TreeItem2Checkbox,
  TreeItem2Content,
  TreeItem2GroupTransition,
  TreeItem2Icon,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Provider,
  TreeItem2Root,
  UseTreeItem2Parameters
} from '@mui/x-tree-view';
import { useTreeItem2 } from '@mui/x-tree-view/useTreeItem2/useTreeItem2';
import { clsx } from 'clsx';
import { forwardRef, useCallback } from 'react';
import { Control, FieldPathByValue, useController } from 'react-hook-form';

interface PermissionItemProps {
  control: Control<Role>;
  name: FieldPathByValue<Role, Permission>;
}

interface CustomTreeItemProps
  extends Omit<UseTreeItem2Parameters, 'rootRef'>,
    Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus' | 'onChange'> {
  selected: boolean;
  onChange: (checked: boolean) => void;
}

const CustomTreeItem = forwardRef(
  (
    { id, itemId, label, disabled, children, selected, onChange, ...other }: CustomTreeItemProps,
    ref: React.Ref<HTMLLIElement>
  ) => {
    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getCheckboxProps,
      getLabelProps,
      getGroupTransitionProps,
      status
    } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

    const handleCheckedChange = useCallback((_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      onChange(checked);
    }, []);

    return (
      <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root {...getRootProps(other)}>
          <TreeItem2Content {...getContentProps()} className={clsx('!p-2 md:!p-3', { 'Mui-selected': selected })}>
            <TreeItem2IconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
            <TreeItem2Checkbox {...getCheckboxProps()} />
            <div className='flex flex-grow items-center gap-2'>
              <Checkbox checked={selected} onChange={handleCheckedChange} />
              <TreeItem2Label {...getLabelProps()} />
            </div>
          </TreeItem2Content>
          {children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />}
        </TreeItem2Root>
      </TreeItem2Provider>
    );
  }
);

const PermissionItem: React.FC<PermissionItemProps> = ({ control, name }) => {
  const {
    field: { value, onChange }
  } = useController({ name, control });

  return (
    <CustomTreeItem
      itemId={value?.id ?? name}
      label={value?.name}
      className='!mt-1'
      selected={value?.isEnable}
      onChange={(checked) => onChange({ ...value, isEnable: checked })}
    >
      {value?.items?.map((item, index) => (
        <PermissionItem
          key={item.id}
          control={control}
          name={`${name}.items.${index}` as FieldPathByValue<Role, Permission>}
        />
      )) ?? undefined}
    </CustomTreeItem>
  );
};

export default PermissionItem;
