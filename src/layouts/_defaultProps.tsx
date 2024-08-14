import { adminPath, dashboardPath } from '@/routes';
import { ProLayoutProps } from '@ant-design/pro-components';
import { UilDashboard } from '@iconscout/react-unicons'

// eslint-disable-next-line import/no-anonymous-default-export
export const defaultProps: ProLayoutProps = {
    pageTitleRender: false,
    route: {
        path: '/',
        routes: [
            {
                path: '/home',
                name: 'Home',
            },
            {
                path: adminPath,
                name: 'Admin',
                access: 'canAdmin',
                routes: [
                    {
                        path: dashboardPath,
                        name: 'Dashboard',
                        icon: <UilDashboard />,
                    }
                ],
            },
        ],
    },
};