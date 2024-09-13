'use client';

import { Server } from '@modules/(services)/_models/server';
import { Controller, useFormContext } from 'react-hook-form';

import { fields } from './server-info.schema';

const ServerInfo: React.FC = () => {
  const { control } = useFormContext<Server>();
  return (
    <div className='grid grid-cols-12 gap-4 p-6'>
      {fields.map(({ name, render }) => (
        <Controller key={name} control={control} name={name} render={(params) => render({ ...params, control })} />
      ))}
    </div>
  );
};

export default ServerInfo;
