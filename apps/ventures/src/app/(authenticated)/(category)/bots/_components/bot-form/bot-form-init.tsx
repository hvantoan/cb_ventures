'use client';

import { Bot } from '@modules/(category)/_models/bot';
import { useQueryBot } from '@modules/(category)/_queries/use-query-bot';
import { memo, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface BotFormInitProps {
  botId?: string;
}

const BotFormInit: React.FC<BotFormInitProps> = ({ botId }) => {
  const { reset } = useFormContext<Bot>();

  const { data: bot } = useQueryBot(botId);

  useEffect(() => {
    if (!botId) return;

    reset(bot);
  }, [botId, bot]);

  return null;
};

export default memo(BotFormInit);
