import { IconButton } from '@mui/material';
import Link from 'next/link';

interface PageHeaderProps {
  backTo?: string;
  children?: React.ReactNode;
  title: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ backTo, children, title }) => {
  return (
    <div className='flex flex-wrap justify-between gap-2 md:flex-row'>
      <div className='flex gap-2'>
        {Boolean(backTo) && (
          <IconButton className='h-fit' component={Link} href={backTo!}>
            <span className='i-solar-alt-arrow-left-linear h-4 w-4' />
          </IconButton>
        )}
        <div className='flex justify-between gap-2 md:flex-row md:justify-start'>{title}</div>
      </div>
      <div className='flex flex-grow justify-end'>{children}</div>
    </div>
  );
};

export default PageHeader;
