import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { globalConfigReducer, globalConfigReducerName } from './reducers/configs/global-config';
import { generalReducer, generalReducerName } from './reducers/general';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [globalConfigReducerName]
};

const rootReducer = combineReducers({
  [generalReducerName]: generalReducer,
  [globalConfigReducerName]: globalConfigReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
