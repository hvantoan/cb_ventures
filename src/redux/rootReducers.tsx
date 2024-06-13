import { combineSlices } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import layoutReducer from './themeLayout/reducers'
import { RootState } from './store'
import headerSearchReducer from './headerSearch/reducers'

export const selectAuth = (state: RootState) => state.auth
export const selectLayout = (state: RootState) => state.layout

const rootReducers = combineSlices(authReducer, layoutReducer, headerSearchReducer)
export default rootReducers
