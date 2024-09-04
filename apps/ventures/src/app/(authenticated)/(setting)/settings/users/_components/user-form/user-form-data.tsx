import { AddUserDto } from '@modules/(setting)/settings/users/_models/add-user-dto';
import { useQueryUser } from '@modules/(setting)/settings/users/_queries/use-query-user';
import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';

interface UserFormDataProps {
  userId?: string;
  reset: UseFormReset<AddUserDto>;
}

const UserFormData: React.FC<UserFormDataProps> = ({ userId, reset }) => {
  const { data } = useQueryUser(userId);

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  return null;
};

export default UserFormData;
