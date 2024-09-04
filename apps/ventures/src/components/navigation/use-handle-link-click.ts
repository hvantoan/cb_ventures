import { useMediaQuery } from '@mui/material';
import { useCallback } from 'react';

import { useAppDispatch } from '@/store';
import { closeSidebar } from '@/store/reducers/general';

export const useHandleLinkClick = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const dispatch = useAppDispatch();

  return useCallback(() => {
    if (!isMobile) return;
    dispatch(closeSidebar());
  }, [isMobile]);
};
