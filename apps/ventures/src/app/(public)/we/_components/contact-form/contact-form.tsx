'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Box, Stack, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useCallback, useEffect } from 'react';
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { CONTACT_QK } from '@/query/query-keys';

import { saveContactAction } from '../../_actions/save-contact-action';
import { Contact } from '../../_model/contact';
import { useQueryMe } from '../../_queries/use-query-me';
import ContactFormBank from './contact-form-bank';
import ContactFormIdentity from './contact-form-identity';

const resolver = classValidatorResolver(Contact);

const validateError: SubmitErrorHandler<Contact> = (errors: any) => {
  console.info('Contact validate failed', errors);
  const errorMessages = Object.values(errors).map((error: any) => error.message);
  // Display each error message as a toast notification
  errorMessages.forEach((message) => {
    toast.error(message);
  });
};

interface ContactFormProps {
  formId: string;
  children: React.ReactNode;
}

const ContactForm: React.FC<ContactFormProps> = ({ formId, children: actions }) => {
  const { data: me } = useQueryMe();
  const theme = useTheme();

  const { control, handleSubmit, reset } = useForm<Contact>({
    resolver,
    defaultValues: new Contact(),
    reValidateMode: 'onChange'
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    if (me) {
      reset({
        name: me.name,
        phone: me.phone,
        email: me.email,
        identityCard: me.identityCard,
        bankCard: me.bankCard ? me.bankCard[0] : undefined
      });
    }
  }, [me]);

  const validateSuccess = useCallback(async (formData: Contact) => {
    const payload = instanceToPlain(formData) as Contact;
    const promise = saveContactAction(payload);
    try {
      await toast.promise(
        promise,
        {
          pending: 'Đang lưu...',
          success: {
            render: ({ data }) => {
              return data?.message;
            }
          },
          error: {
            render: ({ data }) => {
              return (data as Error)?.message;
            }
          }
        },
        { delay: 0 }
      );
      await queryClient.invalidateQueries({ queryKey: [CONTACT_QK] });
    } catch {
      // nothing
    }
  }, []);

  const textFieldSx = {
    '& label': {
      color: 'white'
    },
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInputLabel-shrink': {
      color: 'white !important'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main
      }
    },
    '& .MuiInputBase-input': {
      color: 'white' // This ensures the input text color is white
    }
  };

  return (
    <Box
      className='my-4 flex flex-col gap-4'
      component='form'
      id={formId}
      noValidate
      onSubmit={handleSubmit(validateSuccess, validateError)}
    >
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
        <Controller
          control={control}
          name='name'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='Tên liên hệ'
              value={value ?? ''}
              onChange={onChange}
              sx={textFieldSx}
              error={Boolean(error)}
              helperText={error?.message}
              InputProps={{ readOnly: true }}
            />
          )}
        />
        <Controller
          control={control}
          name='phone'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='Số điện thoại'
              value={value ?? ''}
              onChange={onChange}
              helperText={error?.message}
              error={Boolean(error)}
              sx={textFieldSx}
              InputProps={{ readOnly: true }}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='Email'
              InputProps={{ readOnly: true }}
              value={value ?? ''}
              onChange={onChange}
              helperText={error?.message}
              error={Boolean(error)}
              sx={textFieldSx}
            />
          )}
        />
        <Controller
          control={control}
          name='identityCard'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='CMND/CCCD'
              InputProps={{ readOnly: false }}
              value={value ?? ''}
              onChange={onChange}
              sx={textFieldSx}
              error={Boolean(error)}
              helperText={error?.message}
              required
            />
          )}
        />
      </div>
      <ContactFormIdentity control={control} />
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
        <Controller
          control={control}
          name='bankCard.cardNumber'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='Số thẻ ngân hàng'
              InputProps={{ readOnly: false }}
              value={value ?? ''}
              onChange={onChange}
              sx={textFieldSx}
              error={Boolean(error)}
              helperText={error?.message}
              required
            />
          )}
        />
        <Controller
          control={control}
          name='bankCard.name'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='Tên chủ thẻ'
              InputProps={{ readOnly: false }}
              value={value ?? ''}
              onChange={onChange}
              sx={textFieldSx}
              error={Boolean(error)}
              helperText={error?.message}
              required
            />
          )}
        />
        <Controller
          control={control}
          name='bankCard.cardBranch'
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <TextField
              label='Chi nhánh thẻ'
              InputProps={{ readOnly: false }}
              value={value ?? ''}
              onChange={onChange}
              sx={textFieldSx}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />
      </div>
      <ContactFormBank control={control} />
      <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
        {actions}
      </Stack>
    </Box>
  );
};

export default ContactForm;
