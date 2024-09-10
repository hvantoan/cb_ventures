import BotInfoHeader from '../_components/bot-info-header';
import { BotDetailCard } from './_components';

const BotDetailPage: React.FC<Params<'botId'>> = async ({ params: { botId } }) => {
  return (
    <>
      <BotInfoHeader botId={botId} />
      <BotDetailCard botId={botId} />
    </>
  );
};

export default BotDetailPage;
