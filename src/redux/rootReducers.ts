import { combineSlices } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import layoutReducer from './themeLayout/reducers'
import { RootState } from './store'
import headerSearchReducer from './headerSearch/reducers'
import contactReducer from './contact/reducer'

export const selectAuth = (state: RootState) => state.auth
export const selectLayout = (state: RootState) => state.layout
export const selectContact = (state: RootState) => state.contact

const rootReducers = combineSlices(authReducer, layoutReducer, headerSearchReducer, contactReducer)
export default rootReducers
