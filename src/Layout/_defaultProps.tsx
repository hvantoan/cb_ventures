import {
    CrownFilled,
    SmileFilled,
} from '@ant-design/icons';
import { ProLayoutProps } from '@ant-design/pro-components';

// eslint-disable-next-line import/no-anonymous-default-export
export const defaultProps: ProLayoutProps = {
    route: {
        path: '/',
        routes: [
            {
                path: '/home',
                name: 'Home',
                icon: <SmileFilled />,
                // component: './Welcome',
            },
            {
                path: '/admin',
                name: 'admin',
                icon: <CrownFilled />,
                access: 'canAdmin',
                component: './Admin',
                routes: [
                    {
                        path: '/admin/sub-page1',
                        name: 'Trang đầu tiên',
                        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page2',
                        name: 'Trang thứ hai',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                    {
                        path: '/admin/sub-page3',
                        name: 'Trang thứ ba',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                ],
            },
        ],
    },
    location: {
        pathname: '/',
    },
    appList: [],

};