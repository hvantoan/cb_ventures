import { useQuery } from '@tanstack/react-query';

import { getMerchantDefaultAction } from '@/app/_actions/get-merchant-default-action';
import { MERCHANT_DEFAULT_QK } from '@/query/query-keys';

const queryFn = async () => {
  const res = await getMerchantDefaultAction();

  return res;
};

export const useQueryMerchantDefault = () => {
  return useQuery<BaseResponse<MerchantDefault>>({
    queryKey: [MERCHANT_DEFAULT_QK],
    queryFn,
    staleTime: Infinity
  });
};
