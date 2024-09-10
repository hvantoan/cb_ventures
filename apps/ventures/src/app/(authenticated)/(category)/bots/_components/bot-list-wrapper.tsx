'use client';

import { QueryBotFilter } from '@modules/(category)/_types/bot-filter';
import { Typography } from '@mui/material';
import { useRef } from 'react';

import BotList, { BotListRef } from './bot-list/bot-list';
import QuickActions from './quick-actions';

interface BotListWrapperProps {
  initFilters: QueryBotFilter;
}

const TITLE = 'Bots';

const BotListWrapper: React.FC<BotListWrapperProps> = ({ initFilters }) => {
  const botRef = useRef<BotListRef>(null);

  return (
    <>
      <div className='mb-6 flex items-center justify-between'>
        <Typography typography='h4'>{TITLE}</Typography>
        <QuickActions />
      </div>
      <BotList initFilters={initFilters} ref={botRef} />
    </>
  );
};

export default BotListWrapper;
