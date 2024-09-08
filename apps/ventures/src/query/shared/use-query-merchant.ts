import { Merchant } from '@modules/(setting)/settings/merchant/_models/merchant';
import { useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { getMerchantAction } from '@/app/_actions/get-merchant-action';
import { MERCHANT_QK } from '@/query/query-keys';

const select = (input: BaseResponse<Merchant>) => plainToInstance(Merchant, input?.data);

export const useQueryMerchant = () => {
  return useQuery({
    queryKey: [MERCHANT_QK],
    queryFn: async () => getMerchantAction(),
    select
  });
};
