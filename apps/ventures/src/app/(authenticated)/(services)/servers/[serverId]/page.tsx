import ServerForm from '../_components/server-form/server-form';

const ServerEditPage: React.FC<Params<'serverId'>> = ({ params: { serverId } }) => {
  return <ServerForm serverId={serverId} />;
};

export default ServerEditPage;
