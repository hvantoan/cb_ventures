'use client';

import { Server } from '@modules/(services)/_models/server';
import { useQueryServer } from '@modules/(services)/_queries/use-query-server';
import { memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface ServerFormInitProps {
  serverId?: string;
}

const ServerFormInit: React.FC<ServerFormInitProps> = ({ serverId }) => {
  const { reset } = useFormContext<Server>();

  const { data: server } = useQueryServer(serverId);

  useEffect(() => {
    if (!serverId) return;
    reset(server);
  }, [serverId, server]);

  return null;
};

export default memo(ServerFormInit);
