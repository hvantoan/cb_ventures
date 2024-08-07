import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '@/redux/reducers/auth/reducers';
import contactReducer from '@/redux/reducers/contact/reducer';
import headerSearchReducer from '@/redux/reducers/headerSearch/reducers';
import layoutReducer from '@/redux/reducers/themeLayout/reducers';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const rootReducer = combineReducers({
  [authReducer.name]: authReducer.reducer,
  [contactReducer.name]: contactReducer.reducer,
  [headerSearchReducer.name]: headerSearchReducer.reducer,
  [layoutReducer.name]: layoutReducer.reducer
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
