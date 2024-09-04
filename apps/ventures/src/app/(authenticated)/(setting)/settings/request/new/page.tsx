import { Typography } from '@mui/material';

import { PageHeader } from '@/components/page-header';

import UserRequestActions from '../_components/user-request-actions';
import { UserRequestForm } from '../_components/user-request-form';

const TITLE = 'Tạo yêu cầu mới';
const Title = <Typography typography='h4'>{TITLE}</Typography>;

const UserRequestNewPage: React.FC<Params<'requestId'>> = ({ params: { requestId } }) => {
  return (
    <div>
      <PageHeader title={Title}>
        <UserRequestActions requestId={requestId} />
      </PageHeader>
      <UserRequestForm requestId={requestId} />
    </div>
  );
};

export default UserRequestNewPage;
