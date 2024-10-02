'use client';

import DefaultBotImage from '@fumy/ui/assets/images/product-default.png';
import { useToggle } from '@fumy/utilities/hooks';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { modifyBotAction } from '@modules/(category)/_actions/modify-bot-action';
import { Bot } from '@modules/(category)/_models/bot';
import BackupIcon from '@mui/icons-material/Backup';
import { Box, Button, Card } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useCallback } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  EXCEED_MAX_IMAGE_SIZE_ERROR_MESSAGE,
  IMAGE_TYPES,
  MAX_IMAGE_SIZE,
  WRONG_IMAGE_TYPE_ERROR_MESSAGE
} from '@/constants';
import { convertToByteArray } from '@/helpers/image-helpers';
import type { Image as ImageType } from '@/models/image';
import { BOT_QK } from '@/query/query-keys';
import { botsPath } from '@/routes';

import BotInfoHeader from '../bot-info-header';
import BotFormInit from './bot-form-init';
import ProductInfo from './bot-info';

interface BotFormProps {
  botId?: string;
}

const UPLOAD_LABEL = 'Tải hình';

const resolver = classValidatorResolver(Bot);

const handleKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

const BotForm: React.FC<BotFormProps> = ({ botId }) => {
  const formMethods = useForm<Bot>({
    resolver,
    defaultValues: new Bot(),
    reValidateMode: 'onChange'
  });

  const { handleSubmit, control } = formMethods;
  const router = useRouter();
  const queryClient = useQueryClient();

  const { isOpen: isLoading, handleOpen: startLoading, handleClose: stopLoading } = useToggle();

  const onValid = useCallback(async (data: Bot) => {
    startLoading();
    const payload = instanceToPlain(data) as Bot;
    if (!payload.avatar?.id && payload.avatar?.image) {
      payload.avatar.data = convertToByteArray(payload.avatar.image);
    }

    const res = await modifyBotAction(payload);
    if (res.success) {
      toast.success(res.message);
      await queryClient.invalidateQueries({ queryKey: [BOT_QK] });
      router.push(botsPath);
    } else toast.error(res.message);

    stopLoading();
  }, []);

  const handleImageChange = (onChange: (...event: any[]) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!IMAGE_TYPES.includes(file.type)) {
      toast.error(WRONG_IMAGE_TYPE_ERROR_MESSAGE);
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error(EXCEED_MAX_IMAGE_SIZE_ERROR_MESSAGE);
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImage: ImageType = {
        name: file.name,
        image: reader.result as string
      };
      onChange(newImage);
    };
    reader.readAsDataURL(file);
  };
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
        <BotInfoHeader botId={botId} isLoading={isLoading} startLoading={startLoading} stopLoading={stopLoading} />
        <Card>
          <div className='grid grid-cols-12 gap-8'>
            <div className='col-span-12 m-6 flex flex-col items-center md:col-span-3'>
              <Controller
                control={control}
                name='avatar'
                render={({ field: { onChange, value } }) => (
                  <>
                    <Image
                      src={value?.image ?? DefaultBotImage}
                      alt='bot-image'
                      width={480}
                      height={480}
                      quality={100}
                      className='mb-4 h-auto w-full rounded-2xl object-contain'
                    />
                    <label htmlFor='raised-button-file'>
                      <input
                        accept='image/*'
                        className='hidden'
                        id='raised-button-file'
                        type='file'
                        multiple={false}
                        onChange={handleImageChange(onChange)}
                      />
                      <Button component='span' color='primary' startIcon={<BackupIcon />}>
                        {UPLOAD_LABEL}
                      </Button>
                    </label>
                  </>
                )}
              />
            </div>
            <div className='col-span-12 md:col-span-9'>
              <ProductInfo />
            </div>
          </div>
        </Card>
        <BotFormInit botId={botId} />
      </FormProvider>
    </Box>
  );
};

export default BotForm;
