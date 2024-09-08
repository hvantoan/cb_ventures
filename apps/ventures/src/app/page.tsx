import { type Session } from 'next-auth';
import { redirect } from 'next/navigation';

import { getSession } from '@/helpers/getSession';
import { dashboardPath, homePath } from '@/routes';

const Home: React.FC = async () => {
  const session = (await getSession()) as Session;
  if (session?.token) {
    redirect(dashboardPath);
  } else {
    redirect(homePath);
  }
};

export default Home;
