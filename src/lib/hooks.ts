import { useDispatch, useStore } from 'react-redux'
import type { AppDispatch, AppStore } from '@/redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch<AppDispatch>()
export const useAppStore = useStore<AppStore>()
