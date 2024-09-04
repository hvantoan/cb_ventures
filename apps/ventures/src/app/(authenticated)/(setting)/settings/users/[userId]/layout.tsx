import { getQueryClient } from '@fumy/utilities/query';
import { getUserAction } from '@modules/(setting)/settings/users/_actions/get-user-action';
import { Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PageHeader } from '@/components/page-header';
import { USER_QK } from '@/query/query-keys';
import { settingUserPath } from '@/routes';

import { UserActionsMenu } from './_components/user-actions-menu';

const TITLE = 'Cài đặt người dùng';
const Title = <Typography typography='h4'>{TITLE}</Typography>;

interface UserDetailLayoutProps extends Params<'userId'>, React.PropsWithChildren {
  dialog?: React.ReactNode;
}

const UserDetailLayout: React.FC<UserDetailLayoutProps> = ({ params: { userId }, children, dialog }) => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [USER_QK, userId],
    queryFn: async ({ queryKey: [, id] }) => getUserAction(id)
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div className='container mx-auto max-w-screen-lg'>
      <PageHeader title={Title} backTo={settingUserPath}>
        <UserActionsMenu userId={userId} />
      </PageHeader>
      <HydrationBoundary state={dehydratedState}>
        {children}
        {dialog}
      </HydrationBoundary>
    </div>
  );
};

export default UserDetailLayout;
