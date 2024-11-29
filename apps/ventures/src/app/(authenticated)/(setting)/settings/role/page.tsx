import { getQueryClient } from '@hvantoan/utilities/query';
import { Button, Typography } from '@mui/material';
import { HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';

import { PageHeader } from '@/components/page-header';
import { ROLE_QK } from '@/query/query-keys';
import { settingRolePath } from '@/routes';

import { getAllRolesAction } from './_actions/get-all-roles-action';
import { RoleList } from './_components/role-list';

const TITLE = 'Phân quyền';
const Title = <Typography typography='h4'>{TITLE}</Typography>;
const ADD_BUTTON_LABEL = 'Thêm mới';

const RoleSettingPage: React.FC = () => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [ROLE_QK],
    queryFn: async () => getAllRolesAction()
  });

  return (
    <div>
      <PageHeader title={Title}>
        <Button
          component={Link}
          href={`${settingRolePath}/new`}
          color='primary'
          startIcon={<span className='i-eva-plus-outline h-4 w-4' />}
        >
          {ADD_BUTTON_LABEL}
        </Button>
      </PageHeader>
      <HydrationBoundary>
        <RoleList />
      </HydrationBoundary>
    </div>
  );
};

export default RoleSettingPage;
