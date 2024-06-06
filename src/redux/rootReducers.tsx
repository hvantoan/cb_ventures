import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth/reducers'
import layoutReducer from './themeLayout/reducers'

const rootReducers = combineReducers({
  auth: authReducer,
  layout: layoutReducer,
})

export default rootReducers
