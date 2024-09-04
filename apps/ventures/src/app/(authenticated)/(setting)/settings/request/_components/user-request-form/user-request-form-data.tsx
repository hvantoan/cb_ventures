'use client';

import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';

import { UserRequest } from '../../_models/user-request';
import { useQueryUserRequest } from '../../_queries/use-query-user-request';

interface UserRequestFormDataProps {
  requestId?: string;
  reset: UseFormReset<UserRequest>;
}

const UserRequestFormData: React.FC<UserRequestFormDataProps> = ({ requestId, reset }) => {
  const { data } = useQueryUserRequest(requestId);

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  return null;
};

export default UserRequestFormData;
