import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { AppState } from '@/redux/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
