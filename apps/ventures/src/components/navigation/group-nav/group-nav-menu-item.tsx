'use client';

import { MenuItem, MenuItemProps } from '@mui/material';
import { LinkProps } from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useMemo } from 'react';

const GroupNavMenuItem: React.FC<MenuItemProps & LinkProps & { path: string }> = (props) => {
  const segments = useSelectedLayoutSegments();

  const active = useMemo(() => {
    if (props.path?.includes('/')) {
      const paths = props.path.split('/');
      return paths.every((path) => segments.includes(path));
    }
    return segments.includes(props.path);
  }, [segments, props.path]);

  return <MenuItem {...props} selected={active} />;
};

export default GroupNavMenuItem;
