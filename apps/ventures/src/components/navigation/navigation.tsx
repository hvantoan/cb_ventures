'use client';

import { memo } from 'react';

import { GroupNav } from './group-nav';
import { SingleNav } from './single-nav';

interface NavigationProps {
  navInfo: NavigationInfo;
}

const Navigation: React.FC<NavigationProps> = ({ navInfo }) => {
  return navInfo?.children ? <GroupNav navInfo={navInfo} /> : <SingleNav navInfo={navInfo} />;
};

export default memo(Navigation);
