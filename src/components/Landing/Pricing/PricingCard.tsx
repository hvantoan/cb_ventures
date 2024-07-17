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

export function PricingCard(data: PricingCardProps) {
    return (
        <div className="w-full grid gap-4 sm:p-4 md:p4 p-8 bg-secondary/80 rounded-[16px] transform transition duration-300 sm:hover:scale-100 md:hover:scale-100 hover:scale-110 hover:border-primary hover:border">
            <div className='grid gap-2'>
                <h2 className='capitalize text-32'>{data.type}</h2>
                <h3>
                    <span className="text-primary text-22">{`${data.monetaryUnit}${data.price}`}/</span>
                    <span className='text-white text-18 capitalize'>{data.interval}</span>
                </h3>
            </div>
            <div className="pb-8">
                <ul role="list" className="mt-4 space-y-3">
                    {data.features.map((feature, index) => (
                        <li key={index + data.id} className="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-5 w-5 text-green-400" width="24"
                                height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l5 5l10 -10"></path>
                            </svg>
                            <span className="text-16 text-pink">{feature}</span>
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