import { getQueryClient } from '@fumy/utilities/query';
import { Button, Typography } from '@mui/material';
import { HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';

import { PageHeader } from '@/components/page-header';
import { getDefaultListFilters } from '@/helpers/get-default-list-filters';
import { USER_REQUEST_QK } from '@/query/query-keys';
import { settingRequestPath } from '@/routes';

import { getUserRequestsAction } from './_actions/get-user-requests-action';
import { UserRequestList } from './_components/user-request-list';

const TITLE = 'Yêu cầu';
const Title = <Typography typography='h4'>{TITLE}</Typography>;
const ADD_BUTTON_LABEL = 'Thêm mới';

const RequestSettingsPage: React.FC = () => {
  const hydrateClient = getQueryClient();
  const initFilter = getDefaultListFilters();
  initFilter.isCount = true;

  hydrateClient.prefetchQuery({
    queryKey: [USER_REQUEST_QK, initFilter],
    queryFn: async ({ queryKey: [, filter] }) => getUserRequestsAction(filter as BaseListRequest)
  });

  return (
    <div>
      <PageHeader title={Title}>
        <Button
          component={Link}
          href={`${settingRequestPath}/new`}
          color='primary'
          startIcon={<span className='i-eva-plus-outline h-4 w-4' />}
        >
          {ADD_BUTTON_LABEL}
        </Button>
      </PageHeader>
      <HydrationBoundary>
        <UserRequestList initFilter={initFilter} />
      </HydrationBoundary>
    </div>
  );
};

export default RequestSettingsPage;
