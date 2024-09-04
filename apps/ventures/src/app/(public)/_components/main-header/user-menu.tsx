'use client';

import { useToggle } from '@fumy/utilities/hooks';
import { Divider, IconButton, MenuItem, Popover, Typography } from '@mui/material';
import { useSession, signOut } from 'next-auth/react';
import { useRef } from 'react';

import { basePath, loginPath } from '@/routes';

const UserMenu: React.FC = () => {
  const { isOpen, handleOpen, handleClose } = useToggle();
  const ref = useRef<HTMLButtonElement>(null);
  const session = useSession();
  return (
    <>
      <IconButton
        className='!bg-grey-500/30 !p-0.5 transition-transform hover:scale-125'
        onClick={handleOpen}
        ref={ref}
      >
        <div className='flex h-6 w-6 items-center justify-center rounded-full border-2 border-solid border-white p-0.5'>
          <span className='i-solar-user-rounded-bold-duotone bg-grey-600 h-5 w-5' />
        </div>
      </IconButton>
      <Popover
        open={isOpen}
        anchorEl={ref.current}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
        slotProps={{
          paper: {
            className: 'backdrop-blur-md bg-white/90 p-0 w-[200px] mt-1'
          }
        }}
      >
        <div className='px-4 pb-3 pt-4'>
          <Typography variant='subtitle2' component='h6'>
            {session?.data?.user?.name}
          </Typography>
          <Typography variant='caption'>{session?.data?.user?.merchantName}</Typography>
        </div>
        <Divider variant='fullWidth' className='!border-dashed' />
        <div className='p-2'>
          <MenuItem>Đổi mật khẩu</MenuItem>
          <MenuItem>Đổi mã PIN</MenuItem>
        </div>
        <Divider variant='fullWidth' className='!border-dashed' />
        <div className='p-2'>
          <MenuItem onClick={() => signOut({ callbackUrl: `${basePath}${loginPath}` })}>Đăng xuất</MenuItem>
        </div>
      </Popover>
    </>
  );
};

export default UserMenu;
