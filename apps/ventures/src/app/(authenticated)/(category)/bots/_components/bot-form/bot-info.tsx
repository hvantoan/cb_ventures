'use client';

import { Bot } from '@modules/(category)/_models/bot';
import { Controller, useFormContext } from 'react-hook-form';

import { fields } from './bot-info.schema';

const BotInfo: React.FC = () => {
  const { control } = useFormContext<Bot>();
  return (
    <div className='grid grid-cols-12 gap-4 p-6'>
      {fields.map(({ name, render }) => (
        <Controller key={name} control={control} name={name} render={(params) => render({ ...params, control })} />
      ))}
    </div>
  );
};

export default BotInfo;
