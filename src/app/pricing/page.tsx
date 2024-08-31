import { Pricing, PricingCardProps } from '../home/_components';
import pricingsData from '@/data/pricing.json';
const PricingPage = () => {
    return <Pricing data={pricingsData as PricingCardProps[]} />;
};

export default PricingPage;
