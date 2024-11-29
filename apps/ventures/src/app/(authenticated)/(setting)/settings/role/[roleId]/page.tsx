import { getQueryClient } from '@hvantoan/utilities/query';
import { Button, Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PageHeader } from '@/components/page-header';
import { ROLE_QK } from '@/query/query-keys';
import { settingRolePath } from '@/routes';

import { getRoleAction } from '../_actions/get-role-action';
import { RoleForm } from '../_components/role-form';
import { FORM_ID } from '../constants';
import DeleteRoleButton from './_components/delete-role-button';

const TITLE = 'Sửa phân quyền';
const Title = <Typography typography='h4'>{TITLE}</Typography>;
const SUBMIT_BUTTON_LABEL = 'Lưu';

const RoleDetailPage: React.FC<Params<'roleId'>> = ({ params: { roleId } }) => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [ROLE_QK, roleId],
    queryFn: async ({ queryKey: [, id] }) => getRoleAction(id)
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div>
      <PageHeader title={Title} backTo={settingRolePath}>
        <div className='flex items-center gap-4'>
          <DeleteRoleButton roleId={roleId} />
          <Button className='w-32' type='submit' form={FORM_ID}>
            {SUBMIT_BUTTON_LABEL}
          </Button>
        </div>
      </PageHeader>
      <HydrationBoundary state={dehydratedState}>
        <RoleForm roleId={roleId} />
      </HydrationBoundary>
    </div>
  );
};

export default RoleDetailPage;
