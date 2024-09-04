'use client';

import { LinearProgress } from '@mui/material';
import { useIsFetching } from '@tanstack/react-query';

import { useAppSelector } from '@/store';

const ApiLoading: React.FC = () => {
  const isLoading = useAppSelector((state) => state.general.loading.api);
  const isFetching = useIsFetching(undefined);

  return (
    (isLoading || Boolean(isFetching)) && (
      <div className='fixed left-0 right-0 top-0 z-[10000]'>
        <LinearProgress color='info' />
      </div>
    )
  );
};

export default ApiLoading;
