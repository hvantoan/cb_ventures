'use client';

import { useToggle } from '@hvantoan/utilities/hooks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';
import PinIcon from '@mui/icons-material/Pin';
import { Avatar, Divider, IconButton, MenuItem, Popover, Stack, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useRef } from 'react';

// Import the icon
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
          <Avatar alt={session?.data?.user.name} src={session?.data?.user.avatar} className='h-6 w-6' />
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
        </div>
        <Divider variant='fullWidth' className='!border-dashed' />
        <div className='p-2'>
          <MenuItem>
            <Stack direction='row' spacing={1}>
              <HistoryIcon />
              <Typography>Lịch sử liên hệ</Typography>
            </Stack>
          </MenuItem>
          <MenuItem>
            <Stack direction='row' spacing={1}>
              <PinIcon />
              <Typography>Đổi mật khẩu</Typography>
            </Stack>
          </MenuItem>
        </div>
        <Divider variant='fullWidth' className='!border-dashed' />
        <div className='p-2'>
          <MenuItem className='group' onClick={() => signOut({ callbackUrl: `${basePath}${loginPath}` })}>
            <Stack direction='row' spacing={1}>
              <ExitToAppIcon className='group-hover:pro' />
              <Typography> Đăng xuất</Typography>
            </Stack>
          </MenuItem>
        </div>
      </Popover>
    </>
  );
};

export default UserMenu;
