'use client';

import { useToggle } from '@hvantoan/utilities/hooks';

import BotInfoHeader from '../_components/bot-info-header';
import { BotDetailCard } from './_components';

const BotDetailPage: React.FC<Params<'botId'>> = ({ params: { botId } }) => {
  const { isOpen: isLoading, handleClose: stopLoading, handleOpen: startLoading } = useToggle();
  return (
    <>
      <BotInfoHeader botId={botId} isLoading={isLoading} startLoading={startLoading} stopLoading={stopLoading} />
      <BotDetailCard botId={botId} />
    </>
  );
};

export default BotDetailPage;
