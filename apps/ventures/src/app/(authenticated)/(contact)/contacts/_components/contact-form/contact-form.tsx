'use client';

import { useToggle } from '@fumy/utilities/hooks';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Contact } from '@modules/(contact)/_model/contact';
import { LoadingButton } from '@mui/lab';
import { Box, Card } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { CONTACT_QK } from '@/query/query-keys';
import { contactsPath } from '@/routes';

import { modifyContactAction } from '../../_actions/modify-contact-action';
import StoreInfoHeader from '../contact-info-header';
import ContactFormInit from './contact-form-init';
import { fields } from './contact-info.schema';

interface ContactFormProps {
  contactId?: string;
}

const SAVE_BUTTON_LABEL = 'Lưu';

const resolver = classValidatorResolver(Contact);

const handleKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

const StoreForm: React.FC<ContactFormProps> = ({ contactId }) => {
  const formMethods = useForm<Contact>({
    resolver,
    defaultValues: new Contact(),
    reValidateMode: 'onChange'
  });

  const { isOpen: isLoading, handleOpen: startLoading, handleClose: stopLoading } = useToggle();
  const { handleSubmit, control, setValue } = formMethods;
  const router = useRouter();
  const queryClient = useQueryClient();

  const onValid = useCallback(async (data: Contact) => {
    startLoading();
    const payload = instanceToPlain(data) as Contact;
    const res = await modifyContactAction(payload);
    if (res.success) {
      toast.success(res.message);
      await queryClient.invalidateQueries({ queryKey: [CONTACT_QK] });
      router.push(contactsPath);
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
        <StoreInfoHeader contactId={contactId} />
        <Card>
          <div className='grid grid-cols-12 gap-4 p-6'>
            {fields.map(({ name, render }) => (
              <Controller
                key={name}
                control={control}
                name={name}
                render={(params) => render({ ...params, control, setValue })}
              />
            ))}
          </div>
        </Card>
        <div className='flex items-center justify-end gap-4 [&>.MuiButton-root]:min-w-40'>
          <LoadingButton size='large' type='submit' loading={isLoading}>
            <span>{SAVE_BUTTON_LABEL}</span>
          </LoadingButton>
        </div>
        <ContactFormInit contactId={contactId} />
      </FormProvider>
    </Box>
  );
};

export default StoreForm;
