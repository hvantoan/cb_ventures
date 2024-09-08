import { useQuery } from '@tanstack/react-query';

import { INTERNAL_AU_ENDPOINT } from '@/query/internal-endpoints';
import { AU_QK } from '@/query/query-keys';

import { clientInstance } from '../client-instance';

export const useQueryAdministrativeUnits = (levels: Array<AdministrativeUnit>) => {
  const [level1, level2] = levels;
  return useQuery<BaseResponse<Array<AdministrativeUnit>>>({
    queryKey: [AU_QK, level1?.code, level2?.code],
    queryFn: async () => {
      const res = await clientInstance.get(INTERNAL_AU_ENDPOINT, {
        params: {
          lv1: level1?.code,
          lv2: level2?.code
        }
      });
      return res.data;
    }
  });
};
