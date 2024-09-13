'use client';

import { Transaction } from '@modules/(services)/_models';
import { Controller, useFormContext } from 'react-hook-form';

import { fields } from './server-create-transaction.schema';

const ServerCreateTransactionInfo: React.FC = () => {
  const { control } = useFormContext<Transaction>();
  return (
    <div className='grid grid-cols-12 gap-4 p-6'>
      {fields.map(({ name, render }) => (
        <Controller key={name} control={control} name={name} render={(params) => render({ ...params, control })} />
      ))}
    </div>
  );
};

export default ServerCreateTransactionInfo;
