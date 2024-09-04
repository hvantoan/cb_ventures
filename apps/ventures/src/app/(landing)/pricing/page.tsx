import pricingsData from '@/data/pricing.json';

import { Pricing } from '../home/_components';

const PricingPage: React.FC = () => {
  return <Pricing data={JSON.parse(JSON.stringify(pricingsData))} />;
};

export default PricingPage;
