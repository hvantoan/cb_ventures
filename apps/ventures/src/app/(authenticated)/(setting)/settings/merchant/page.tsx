import { getQueryClient } from '@hvantoan/utilities/query';
import { Button, Typography } from '@mui/material';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getMerchantAction } from '@/app/_actions/get-merchant-action';
import { PageHeader } from '@/components/page-header';
import { MERCHANT_QK } from '@/query/query-keys';

import { MerchantForm } from './_components/merchant-form';

const TITLE = 'Thông tin chung';
const Title = <Typography typography='h4'>{TITLE}</Typography>;

const FORM_ID = 'merchant-form';
const SUBMIT_BUTTON_LABEL = 'Lưu';

const MerchantSettingsPage: React.FC = () => {
  const hydrateClient = getQueryClient();

  hydrateClient.prefetchQuery({
    queryKey: [MERCHANT_QK],
    queryFn: async () => getMerchantAction()
  });

  const dehydratedState = dehydrate(hydrateClient);

  return (
    <div>
      <PageHeader title={Title}>
        <Button type='submit' form={FORM_ID} className='w-32'>
          {SUBMIT_BUTTON_LABEL}
        </Button>
      </PageHeader>
      <HydrationBoundary state={dehydratedState}>
        <MerchantForm formId={FORM_ID} />
      </HydrationBoundary>
    </div>
  );
};

export default MerchantSettingsPage;
