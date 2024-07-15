import { UilCheckSquare } from '@iconscout/react-unicons'
import { Button } from 'antd'
export type PricingType = "Basic" | "Pro" | "Premium" | "Enterprise"

export type PricingInterval = "Month" | "Year"

export type PricingCardProps = {
    id: string,
    tag: string,
    price: number,
    monetaryUnit: string,
    interval: PricingInterval,
    type: PricingType,
    features: string[]
}

export default function PricingCard(data: PricingCardProps) {
    return (
        <div className="w-full grid gap-4 sm:p-4 md:p4 p-8 bg-secondary/80 rounded-[16px] transform transition duration-300 sm:hover:scale-100 md:hover:scale-100 hover:scale-110 hover:border-primary hover:border">
            <div className='grid gap-2'>
                <h2 className='capitalize text-2xl'>{data.type}</h2>
                <h3>
                    <span className="text-primary text-xl">{`${data.monetaryUnit}${data.price}`}/</span>
                    <span className='text-white text-xl capitalize'>{data.interval}</span>
                </h3>
            </div>
            <div className='border-b-1'></div>
            <div>
                <ul>
                    {data.features.map((feature, index) => (
                        <li key={index} className='flex items-center'>
                            <UilCheckSquare className="text-primary h-8 mr-2" />
                            <span className='text-pink'>{feature}</span>
                        </li>
                    ))}
                </ul>

            </div>
            <div>
                <Button className="h-11 text-17 w-full bg-secondary hover:bg-primary border-primary text-primary hover:text-secondary" htmlType="button">
                    Chọn gói
                </Button>
            </div>
        </div >

    );
}