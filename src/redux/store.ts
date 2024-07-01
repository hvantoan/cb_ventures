'use client'

import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootReducers'
import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducers,
    devTools: true,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  })
}

// Infer the type of makeStore
export const wrapper = createWrapper(makeStore)
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
