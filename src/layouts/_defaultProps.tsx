import { aboutPath, homePath } from '@/routes';
import { ProLayoutProps } from '@ant-design/pro-components';

export const defaultProps: ProLayoutProps = {
    pageTitleRender: false,
    breadcrumbRender: false,
    route: {
        path: '/',
        routes: [
            {
                path: homePath,
                name: 'Home',
            },
            {
                path: aboutPath,
                name: 'About',
            },
        ],
    },
};