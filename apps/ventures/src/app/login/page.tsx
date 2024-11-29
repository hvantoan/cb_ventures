import { isFromMobileBrowser } from '@hvantoan/utilities/helpers/is-from-mobile-browser';
import dayjs from 'dayjs';
import { type Session } from 'next-auth';
import { redirect } from 'next/navigation';

import { LoginView } from '@/app/login/_components/login-view';
import { getSession } from '@/helpers/getSession';
import { homePath } from '@/routes';

import LoginForm from './_components/login-form/login-form';

const LoginPage: React.FC = async () => {
  const session = (await getSession()) as Session;

  if (session?.token) {
    if (dayjs().isBefore(dayjs(session.expiredTime))) {
      return redirect(homePath);
    }
  }

  const isFromMobile = isFromMobileBrowser();

  return (
    <div className='h-full'>
      <main className='flex h-full'>
        <LoginView isFromMobile={isFromMobile} />
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
