'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import type { Store } from 'redux';
import { Persistor, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const StoreProvider: React.FC<WrappedComponentProps & { store: Store }> = ({ children, store }) => {
  const persistorRef = useRef<Persistor>();
  if (!persistorRef.current) {
    persistorRef.current = persistStore(store);
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistorRef.current} />
      {children}
    </Provider>
  );
};

export default StoreProvider;
