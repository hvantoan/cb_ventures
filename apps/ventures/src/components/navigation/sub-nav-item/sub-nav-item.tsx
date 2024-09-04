'use client';

import { Typography } from '@mui/material';
import { clsx } from 'clsx';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useMemo } from 'react';

import { useHandleLinkClick } from '@/components/navigation/use-handle-link-click';

import { DotIcon, StyledListItemButton } from './sub-nav-item.styles';

interface SubNavItemProps {
  path: string;
  text?: React.ReactNode;
}

const SubNavItem: React.FC<SubNavItemProps> = ({ path, text }) => {
  const segments = useSelectedLayoutSegments();

  const active = useMemo(() => {
    if (path?.includes('/')) {
      const paths = path.split('/');
      return paths.every((currPath) => segments.includes(currPath));
    }
    return segments.includes(path);
  }, [segments, path]);

  const handleClick = useHandleLinkClick();

  return (
    <Typography href={`/${path}`} component={Link} variant='body2' fontWeight={500} onClick={handleClick}>
      <StyledListItemButton className={clsx({ active })}>
        <DotIcon />
        {text}
      </StyledListItemButton>
    </Typography>
  );
};

export default SubNavItem;
