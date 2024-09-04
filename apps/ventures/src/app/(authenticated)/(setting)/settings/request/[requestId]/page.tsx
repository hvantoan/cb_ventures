import { getQueryClient } from '@fumy/utilities/query';
import { Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PageHeader } from '@/components/page-header';
import { USER_REQUEST_QK } from '@/query/query-keys';

import { getUserRequestAction } from '../_actions/get-user-request-action';
import UserRequestActions from '../_components/user-request-actions';
import { UserRequestForm } from '../_components/user-request-form';

const TITLE = 'Chỉnh sửa yêu cầu';
const Title = <Typography typography='h4'>{TITLE}</Typography>;

const UserRequestDetailPage: React.FC<Params<'requestId'>> = ({ params: { requestId } }) => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [USER_REQUEST_QK, requestId],
    queryFn: async ({ queryKey: [, id] }) => getUserRequestAction(id)
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <PageHeader title={Title}>
          <UserRequestActions requestId={requestId} />
        </PageHeader>
        <UserRequestForm requestId={requestId} />
      </HydrationBoundary>
    </div>
  );
};

export default UserRequestDetailPage;
