import { Button } from 'antd'
import ArticlesCard, { Article } from './ArticlesCard'

export type ArticlesProps = {
    data: Article[]
}



export function Articles({ data }: ArticlesProps) {
    return (
        <div className="relative min-h-[calc(100vh - 72px)] w-full">
            <div className="absolute inset-0 h-full w-full z-[-1] " />
            <div className="container mx-auto grid sm:py-4 md:py-4 py-20 sm:px-0 md:px-0 px-20">
                <div className='w-full'>
                    <h2 className="text-5xl w-full place-self-center text-center">Bài viết cho <span className='text-primary'>Pro Trader</span></h2>
                    <div className="flex justify-center">
                        <p className="text-white/60 pt-5 pb-10 text-lg max-w-[700px] text-center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veritatis facere blanditiis id provident facilis quisquam corrupti modi ratione iure pariatur deserunt nostrum temporibus itaque illo sapiente quos voluptatum. Laboriosam?
                        </p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-cols-3 gap-4">
                    {data?.slice(0, 3).map((art, idx) => <ArticlesCard key={idx} item={art} theme='style-2' />)}
                </div>
                <div className="flex place-content-center mt-[20px]">
                    <Button className="h-150 px-[20px] py-[20px] text-base/[20px]" htmlType="button" type="primary">
                        <p className="text-dark text-base/[22px]">Xem thêm</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}