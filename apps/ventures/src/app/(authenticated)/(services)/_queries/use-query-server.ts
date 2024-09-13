'use client';

import { type DefaultError, useQuery } from '@tanstack/react-query';
import { plainToInstance } from 'class-transformer';

import { clientInstance } from '@/query/client-instance';
import { INTERNAL_SERVERS_ENDPOINT } from '@/query/internal-endpoints';
import { SERVER_QK } from '@/query/query-keys';

import { Server } from '../_models/server';

const select = (data: BaseResponse<Server>) => {
  return plainToInstance(Server, data.data);
};
export const useQueryServer = (serverId?: string) => {
  return useQuery<BaseResponse<Server>, DefaultError, Server>({
    queryKey: [SERVER_QK, serverId],
    queryFn: async () => {
      const res = await clientInstance.get(`${INTERNAL_SERVERS_ENDPOINT}/${serverId}`);
      return res.data;
    },
    enabled: Boolean(serverId),
    select
  });
};
