import { combineSlices } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import layoutReducer from './themeLayout/reducers'
import { RootState } from './store'

export const selectAuth = (state: RootState) => state.auth
export const selectLayout = (state: RootState) => state.layout

const rootReducers = combineSlices(authReducer, layoutReducer)
export default rootReducers
