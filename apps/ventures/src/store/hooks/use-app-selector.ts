import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { AppState } from '@/store';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
