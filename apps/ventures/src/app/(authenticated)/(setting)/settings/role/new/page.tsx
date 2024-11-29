import { getQueryClient } from '@hvantoan/utilities/query';
import { Button, Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PageHeader } from '@/components/page-header';
import { PERMISSION_QK, ROLE_QK } from '@/query/query-keys';
import { settingRolePath } from '@/routes';

import { getPermissionsAction } from '../_actions/get-permissions-action';
import { RoleForm } from '../_components/role-form';
import { FORM_ID } from '../constants';

const TITLE = 'Thêm mới phân quyền';
const Title = <Typography typography='h4'>{TITLE}</Typography>;
const SUBMIT_BUTTON_LABEL = 'Lưu';

const NewRolePage: React.FC = () => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [ROLE_QK, PERMISSION_QK],
    queryFn: async () => getPermissionsAction()
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div>
      <PageHeader title={Title} backTo={settingRolePath}>
        <div className='flex items-center justify-end gap-4'>
          <Button className='w-32' type='submit' form={FORM_ID}>
            {SUBMIT_BUTTON_LABEL}
          </Button>
        </div>
      </PageHeader>
      <HydrationBoundary state={dehydratedState}>
        <RoleForm />
      </HydrationBoundary>
    </div>
  );
};

export default NewRolePage;
