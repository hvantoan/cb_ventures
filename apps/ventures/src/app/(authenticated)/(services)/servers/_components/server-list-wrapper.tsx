'use client';

import { QueryServerFilter } from '@modules/(services)/_types/server-filter';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import QuickActions from './quick-actions';
import { ServerList } from './server-list';
import { ServerListRef } from './server-list/server-list';

interface ServerListWrapperProps {
  initFilters: QueryServerFilter;
}

const TITLE = 'Server';

const ServerListWrapper: React.FC<ServerListWrapperProps> = ({ initFilters }) => {
  const serverRef = useRef<ServerListRef>(null);

  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <Typography typography='h4'>{TITLE}</Typography>
        <QuickActions />
      </div>
      <ServerList initFilters={initFilters} ref={serverRef} />
    </>
  );
};

export default ServerListWrapper;
