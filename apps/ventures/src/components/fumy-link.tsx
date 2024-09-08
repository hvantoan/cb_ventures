import { Typography, TypographyProps } from '@mui/material';
import { clsx } from 'clsx';
import Link from 'next/link';

interface LinkProps extends TypographyProps<'a'> {
  href: string;
  scroll?: boolean;
}

const FumyLink: React.FC<LinkProps> = ({
  href,
  scroll,
  fontWeight = 500,
  color = 'primary.dark',
  className,
  ...props
}) => {
  return (
    <Typography
      scroll={false}
      {...props}
      variant='inherit'
      component={Link}
      href={href}
      fontWeight={fontWeight}
      color={color}
      className={clsx('hover:underline', className)}
    />
  );
};

export default FumyLink;
