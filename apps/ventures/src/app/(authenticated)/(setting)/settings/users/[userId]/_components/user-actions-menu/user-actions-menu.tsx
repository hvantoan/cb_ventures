'use client';

import { useToggle } from '@fumy/utilities/hooks';
import { Button, ButtonGroup, Menu, MenuItem, PopoverOrigin } from '@mui/material';
import Link from 'next/link';
import { useRef } from 'react';

import { settingUserPath } from '@/routes';

import RemoveUserOption from './remove-user-option';
import SubmitUserFormButton from './submit-user-form-button';

interface UserActionsMenuProps {
  userId: string;
}

const anchor: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'right'
};

const transform: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'right'
};

const UserActionsMenu: React.FC<UserActionsMenuProps> = ({ userId }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <>
      <ButtonGroup variant='contained'>
        <SubmitUserFormButton />
        <Button ref={buttonRef} onClick={handleOpen}>
          <span className='i-solar-alt-arrow-down-bold' />
        </Button>
      </ButtonGroup>
      <Menu
        open={isOpen}
        anchorEl={buttonRef.current}
        anchorOrigin={anchor}
        transformOrigin={transform}
        onClose={handleClose}
      >
        <RemoveUserOption closeMenu={handleClose} userId={userId} />
        <MenuItem component={Link} href={`${settingUserPath}/${userId}/reset-password`} onClick={handleClose}>
          Đổi mật khẩu
        </MenuItem>
        <MenuItem component={Link} href={`${settingUserPath}/${userId}/reset-pin-code`} onClick={handleClose}>
          Đổi mã PIN
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserActionsMenu;
