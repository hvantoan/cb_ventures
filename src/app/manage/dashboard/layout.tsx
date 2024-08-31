import { AdminLayout } from '@/layouts/AdminLayout';

const HomeLayout: React.FC<WrappedComponentProps> = ({ children }) => {
    return <AdminLayout>{children}</AdminLayout>;
};
export default HomeLayout;
