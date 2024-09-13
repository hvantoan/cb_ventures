'use client';

import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';

import { serversPath } from '@/routes';

const ADD_BUTTON_LABEL = 'Thêm Server';

interface QuickActionsProps {}

const QuickActions: React.FC<QuickActionsProps> = () => {
  return (
    <div className='flex items-center gap-2'>
      <ButtonGroup variant='contained' color='inherit'>
        <Button component={Link} href={`${serversPath}/new`} scroll={false}>
          {ADD_BUTTON_LABEL}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default QuickActions;
