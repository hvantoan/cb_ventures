import { type Session } from 'next-auth';
import { redirect } from 'next/navigation';

import { getSession } from '@/libs/helpers/getSession';
import { dashboardPath, landingPath } from '@/routes';

const Home: React.FC = async () => {
  const session = (await getSession()) as Session;
  if (session?.token) {
    redirect(dashboardPath);
  } else {
    redirect(landingPath);
  }
};

export default Home;
