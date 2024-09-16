'use client';

import { useToggle } from '@fumy/utilities/hooks';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { modifyServerAction } from '@modules/(services)/_actions/modify-server-action';
import { Server } from '@modules/(services)/_models/server';
import { Box, Card } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { SERVER_QK } from '@/query/query-keys';
import { serversPath } from '@/routes';

import ServerInfoHeader from '../server-info-header';
import ServerFormInit from './server-form-init';
import ServerInfo from './server-info';

interface ServerFormProps {
  serverId?: string;
}

const resolver = classValidatorResolver(Server);

const handleKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

const ServerForm: React.FC<ServerFormProps> = ({ serverId }) => {
  const formMethods = useForm<Server>({
    resolver,
    defaultValues: new Server(),
    reValidateMode: 'onChange'
  });

  const { handleSubmit } = formMethods;
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isOpen: isLoading, handleOpen: startLoading, handleClose: stopLoading } = useToggle();

  const onValid = useCallback(async (data: Server) => {
    startLoading();
    const payload = instanceToPlain(data) as Server;

    payload.userId = payload.user?.id;
    payload.botId = payload.bot.id;

    const res = await modifyServerAction(payload);
    if (res.success) {
      toast.success(res.message);
      await queryClient.invalidateQueries({ queryKey: [SERVER_QK] });
      router.push(serversPath);
    } else {
      toast.error(res.message);
      stopLoading();
    }
  }, []);

  return (
    <Box
      component='form'
      className='flex flex-col gap-6'
      noValidate
      onSubmit={handleSubmit(onValid, (e) => {
        console.error(e);
      })}
      onKeyDown={handleKeyDown}
    >
      <FormProvider {...formMethods}>
        <ServerInfoHeader
          serverId={serverId}
          isLoading={isLoading}
          startLoading={startLoading}
          stopLoading={stopLoading}
        />
        <Card>
          <ServerInfo />
        </Card>
        <ServerFormInit serverId={serverId} />
      </FormProvider>
    </Box>
  );
};

export default ServerForm;
