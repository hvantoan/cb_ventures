'use client';

import { getQueryClient } from '@hvantoan/utilities/query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const QueryProvider: React.FC<WrappedComponentProps> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition='bottom-left' />
    </QueryClientProvider>
  );
};

export default QueryProvider;
