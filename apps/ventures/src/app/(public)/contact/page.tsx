import { Box, Button, Container, Typography } from '@mui/material';
import { HydrationBoundary } from '@tanstack/react-query';

import { PageHeader } from '@/components/page-header';

import { ContactForm } from './_components/contact-form';

const TITLE = 'Thông tin chung';
const Title = (
  <Typography typography='h4' className='text-white/80'>
    {TITLE}
  </Typography>
);

const FORM_ID = 'contact-form';
const SUBMIT_BUTTON_LABEL = 'Liên hệ';

const ContactPage: React.FC = () => {
  return (
    <Container className='py-10'>
      <PageHeader title={Title} />
      <HydrationBoundary>
        <ContactForm formId={FORM_ID} />
      </HydrationBoundary>
      <Box display='flex' justifyContent='center' mt={2}>
        <Button type='submit' color='primary' form={FORM_ID} className='w-32'>
          {SUBMIT_BUTTON_LABEL}
        </Button>
      </Box>
    </Container>
  );
};

export default ContactPage;
