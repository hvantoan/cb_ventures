import { Dialog } from '@mui/material';

const UserDialogLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Dialog open={Boolean(children)} keepMounted={false}>
      {children}
    </Dialog>
  );
};

export default UserDialogLayout;
