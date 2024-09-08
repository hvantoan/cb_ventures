import { UserForm } from '@modules/(setting)/settings/users/_components/user-form';

const UserDetailPage: React.FC<Params<'userId'>> = ({ params: { userId } }) => {
  return <UserForm userId={userId} />;
};

export default UserDetailPage;
