import { BotForm } from '../../_components/bot-form';

const BotEditPage: React.FC<Params<'botId'>> = ({ params: { botId } }) => {
  return <BotForm botId={botId} />;
};

export default BotEditPage;
