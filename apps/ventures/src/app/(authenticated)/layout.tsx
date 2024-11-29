import { isFromMobileBrowser } from '@hvantoan/utilities/helpers/is-from-mobile-browser';
import { decodeJwt } from 'jose';
import type { Session } from 'next-auth';
import { cookies } from 'next/headers';

import { Sidebar } from '@/app/(authenticated)/_components/sidebar';
import { InitContextProvider } from '@/app/(authenticated)/_context/init-context';
import { GENERAL_COOKIE_NAME, ROLE_KEY } from '@/app/(authenticated)/constants';
import { navItems } from '@/app/(authenticated)/nav-items';
import type { Roles } from '@/enums/role.enum';
import { getValidNavigationItems } from '@/helpers/get-valid-navigation-items';
import { getSession } from '@/helpers/getSession';

import { MainHeader } from './_components/main-header';

export const revalidate = 0;

const AuthenticatedLayout: React.FC<WrappedComponentProps> = async ({ children }) => {
  const isMobile = isFromMobileBrowser();

  const requestCookie = cookies();
  const currentState = requestCookie.get(GENERAL_COOKIE_NAME);
  const session = (await getSession()) as Session;

  const roles = decodeJwt(session?.token as string)[ROLE_KEY] as Array<Roles>;
  const validNavItems = getValidNavigationItems(navItems, roles ?? []);
  return (
    <div className='flex h-full w-full'>
      <InitContextProvider isMobile={isMobile}>
        <Sidebar navItems={validNavItems} initState={(currentState?.value ?? false) === 'true'} />
        <div className='main flex-grow'>
          <MainHeader />
          <main>
            <div className='mx-auto w-[100svw] px-2 pb-4 sm:w-full md:px-4'>{children}</div>
          </main>
        </div>
      </InitContextProvider>
    </div>
  );
};

export default AuthenticatedLayout;
