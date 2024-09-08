import { permanentRedirect, RedirectType } from 'next/navigation';

import { settingUserPath } from '@/routes';

const ResetPinCodePage: React.FC<Params<'userId'>> = ({ params: { userId } }) => {
  const location = `${settingUserPath}/${userId}`;

  return permanentRedirect(location, RedirectType.replace);
};

export default ResetPinCodePage;
