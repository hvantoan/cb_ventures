import { UserForm } from '@modules/(setting)/settings/users/_components/user-form';
import { Button, Typography } from '@mui/material';

import { PageHeader } from '@/components/page-header';
import { settingUserPath } from '@/routes';

import { FORM_ID } from '../[userId]/constants';

const TITLE = 'Thêm người dùng';
const Title = <Typography typography='h4'>{TITLE}</Typography>;
const SUBMIT_BUTTON_LABEL = 'Lưu';

const NewUserPage: React.FC = () => {
  return (
    <div className='container mx-auto max-w-screen-lg'>
      <PageHeader title={Title} backTo={settingUserPath}>
        <Button type='submit' form={FORM_ID} className='min-w-32'>
          {SUBMIT_BUTTON_LABEL}
        </Button>
      </PageHeader>
      <UserForm />
    </div>
  );
};

export default NewUserPage;
