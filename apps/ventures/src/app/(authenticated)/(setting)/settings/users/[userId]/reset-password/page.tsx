import { permanentRedirect, RedirectType } from 'next/navigation';

import { settingUserPath } from '@/routes';

const ResetPasswordPage: React.FC<Params<'userId'>> = ({ params: { userId } }) => {
  const location = `${settingUserPath}/${userId}`;

  return permanentRedirect(location, RedirectType.replace);
};

export default ResetPasswordPage;
