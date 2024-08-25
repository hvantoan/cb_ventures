import dayjs from 'dayjs';
import { type Session } from 'next-auth';
import { redirect } from 'next/navigation';

import { dashboardPath } from '@/routes';
import { getSession } from '@/libs/helpers/getSession';


const LoginPage: React.FC = async () => {
    const session = (await getSession()) as Session;

    if (session?.token) {
        if (dayjs().isBefore(dayjs(session.expiredTime))) {
            return redirect(dashboardPath);
        }
    }


    return <LoginPage />
};

export default LoginPage;
