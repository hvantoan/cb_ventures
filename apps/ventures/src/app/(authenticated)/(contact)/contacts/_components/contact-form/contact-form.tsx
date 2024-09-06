'use client';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useQueryClient } from '@tanstack/react-query';
import { instanceToPlain } from 'class-transformer';
import { useCallback, useEffect } from 'react';
import { Controller, SubmitErrorHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { CONTACT_QK } from '@/query/query-keys';

import { saveContactAction } from '../../../_actions/save-contact-action';
import { Contact } from '../../../_model/contact';
import { useQueryMe } from '../../../_queries/use-query-me';
import { bankCardFormLabels } from './bank-card-form.define';
import ContactFormBank from './contact-form-bank';
import ContactFormIdentity from './contact-form-identity';
import { contactFormLabels } from './contact-form.define';

const resolver = classValidatorResolver(Contact);

const validateError: SubmitErrorHandler<Contact> = (error) => {
  console.info('Contact validate failed', error);
};

interface ContactFormProps {
  formId: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ formId }) => {
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
    } catch (e) {
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
    <Box className='my-4'>
      <form
        className='flex flex-col gap-4'
        id={formId}
        noValidate
        onSubmit={handleSubmit(validateSuccess, validateError)}
      >
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4'>
          <Controller
            control={control}
            name='name'
            render={({ field: { value, onChange } }) => (
              <TextField
                label={contactFormLabels.name}
                value={value ?? ''}
                onChange={onChange}
                sx={textFieldSx}
                required
              />
            )}
          />
          <Controller
            control={control}
            name='phone'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                label={contactFormLabels.phone}
                value={value ?? ''}
                onChange={onChange}
                helperText={error?.message}
                error={Boolean(error)}
                sx={textFieldSx}
                required
              />
            )}
          />
          <Controller
            control={control}
            name='email'
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                label={contactFormLabels.email}
                InputProps={{ readOnly: false }}
                value={value ?? ''}
                onChange={onChange}
                helperText={error?.message}
                error={Boolean(error)}
                sx={textFieldSx}
                required
              />
            )}
          />
          <Controller
            control={control}
            name='identityCard'
            render={({ field: { value, onChange } }) => (
              <TextField
                label={contactFormLabels.identityCard}
                InputProps={{ readOnly: false }}
                value={value ?? ''}
                onChange={onChange}
                sx={textFieldSx}
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
            render={({ field: { value, onChange } }) => (
              <TextField
                label={bankCardFormLabels.cardNumber}
                InputProps={{ readOnly: false }}
                value={value ?? ''}
                onChange={onChange}
                sx={textFieldSx}
                required
              />
            )}
          />
          <Controller
            control={control}
            name='bankCard.name'
            render={({ field: { value, onChange } }) => (
              <TextField
                label={bankCardFormLabels.name}
                InputProps={{ readOnly: false }}
                value={value ?? ''}
                onChange={onChange}
                sx={textFieldSx}
                required
              />
            )}
          />
          <Controller
            control={control}
            name='bankCard.cardBranch'
            render={({ field: { value, onChange } }) => (
              <TextField
                label={bankCardFormLabels.cardBranch}
                InputProps={{ readOnly: false }}
                value={value ?? ''}
                onChange={onChange}
                sx={textFieldSx}
                required
              />
            )}
          />
        </div>
        <ContactFormBank control={control} />
      </form>
    </Box>
  );
};

export default ContactForm;
