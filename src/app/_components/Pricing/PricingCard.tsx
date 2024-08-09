import { Button } from 'antd'
import { UilFolderCheck } from "@iconscout/react-unicons"
export type PricingType = "Basic" | "Pro" | "Premium" | "Enterprise"

export type PricingInterval = "Monthly" | "Yearly"

export type PricingCardProps = {
    id: string,
    tag: string,
    price: number,
    monetaryUnit: string,
    interval: PricingInterval,
    type: PricingType,
    features: string[]
}

export function PricingCard(data: PricingCardProps) {
    return (
        <div className="w-full grid gap-4 p-8 bg-wh_color rounded-16 shadow-pricing_shadow z-10 group  border border-transparent hover:border-brand_color" data-aos="fade-up" data-aos-duration="800">
            <div className='grid gap-2'>
                <h2 className='text-20 uppercase text-white'>{data.type}</h2>
                <h3>
                    <span className="text-secondary text-32">{`${data.monetaryUnit}${data.price}`}/</span>
                    <span className='text-white text-18 capitalize'>{data.interval}</span>
                </h3>
            </div>
            <div className="pb-8">
                <ul role="list" className="mt-4 space-y-3">
                    {data.features.slice(0, 5).map((feature, index) => (
                        <li key={index + data.id} className="flex space-x-4">
                            <UilFolderCheck className="text-secondary" />
                            <span className="text-16 text-pink">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Button className="h-11 text-16 text-primary w-full bg-transparent border-secondary group-hover:bg-secondary group-hover:text-dark" htmlType="button">
                    Chọn gói
                </Button>
            </div>
        </div >

    );
}