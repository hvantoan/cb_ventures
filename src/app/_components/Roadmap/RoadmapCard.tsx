
export type RoadmapCardProps = {
  data: RoadmapItem
  isLeft: boolean
}


export type RoadmapItem = {
  title: string;
  description: string;
  index: number;
}


export function RoadmapCard({ data, isLeft }: RoadmapCardProps) {
  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`} data-aos={`${isLeft ? "fade-right" : "fade-left"}`} data-aos-duration="800">
      <div className={`${isLeft ? "bg-gradient-to-br" : "bg-gradient-to-bl"} from-bg_color_trans to-bg_color sm:p-4 md:p-4 p-8 rounded-[16px] grid gap-4 w-[calc(100%/2-100px)] sm:w-full`}>
        <div className='flex justify-between'>
          <h3 className="text-white text-32 sm:text-24">{data.title}</h3>
          <span className="text-primary text-32 sm:text-24 font-bold">P{data.index}</span>
        </div>
        <p className="text-16 text-white line-clamp-6">{data.description}</p>
      </div>
    </div>
  );
}

