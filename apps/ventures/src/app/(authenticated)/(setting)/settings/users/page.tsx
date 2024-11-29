import { getQueryClient } from '@hvantoan/utilities/query';
import { UserList } from '@modules/(setting)/settings/users/_components/user-list';
import { Button, Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';

import { PageHeader } from '@/components/page-header';
import { getDefaultListFilters } from '@/helpers/get-default-list-filters';
import { USER_QK } from '@/query/query-keys';
import { settingUserPath } from '@/routes';

import { getUserListAction } from './_actions/get-user-list-action';

const TITLE = 'Người dùng';
const Title = <Typography typography='h4'>{TITLE}</Typography>;
const ADD_BUTTON_LABEL = 'Thêm mới';

const UserSettingsPage: React.FC = () => {
  const hydrateClient = getQueryClient();
  const initFilter = getDefaultListFilters();
  initFilter.isCount = true;

  hydrateClient.prefetchQuery({
    queryKey: [USER_QK, initFilter],
    queryFn: async ({ queryKey: [, filter] }) => getUserListAction(filter as BaseListRequest)
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div>
      <PageHeader title={Title}>
        <Button
          component={Link}
          href={`${settingUserPath}/new`}
          color='primary'
          startIcon={<span className='i-eva-plus-outline h-4 w-4' />}
        >
          {ADD_BUTTON_LABEL}
        </Button>
      </PageHeader>
      <HydrationBoundary state={dehydratedState}>
        <UserList initFilter={initFilter} />
      </HydrationBoundary>
    </div>
  );
};

export default UserSettingsPage;
