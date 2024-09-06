import { getQueryClient } from '@fumy/utilities/query';
import { LoadingButton } from '@mui/lab';
import { Box, Container, Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { PageHeader } from '@/components/page-header';
import { ME_QK } from '@/query/query-keys';

import { getMeAction } from './_actions/get-me-action';
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
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [ME_QK],
    queryFn: async () => getMeAction()
  });

  const dehydratedState = dehydrate(hydrateClient);
  return (
    <Container className='py-10'>
      <PageHeader title={Title} />
      <HydrationBoundary state={dehydratedState}>
        <ContactForm formId={FORM_ID} />
      </HydrationBoundary>
      <Box display='flex' justifyContent='center' mt={2}>
        <LoadingButton type='submit' color='primary' form={FORM_ID} className='w-32'>
          {SUBMIT_BUTTON_LABEL}
        </LoadingButton>
      </Box>
    </Container>
  );
};

export default ContactPage;
