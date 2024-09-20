import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          py: 12,
          maxWidth: 480,
          mx: 'auto',
          display: 'flex',
          minHeight: '100vh',
          maxHeight: '100vh',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h3' sx={{ mb: 3 }}>
          Xin lỗi, trang không tồn tại!
        </Typography>

        <Typography color='text.secondary'>
          Xin lỗi, chúng tôi không thể tìm thấy trang mà bạn đang tìm kiếm. Có lẽ bạn đã nhầm URL? Hãy chắc chắn để kiểm
          tra Chính tả.
        </Typography>

        <Box
          component='img'
          src='/ventures/assets/illustrations/404-illustration.svg'
          sx={{
            mx: 'auto',
            height: 260,
            my: { xs: 5, sm: 10 }
          }}
        />

        <Button href='/' size='large' variant='contained' color='primary' component={Link}>
          Trở về trang chủ
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
