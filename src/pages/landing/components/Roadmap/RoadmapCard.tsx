
export type RoadmapCardProps = {
  data: RoadmapItem
  isLeft: boolean
}


export type RoadmapItem = {
  title: string;
  description: string;
  index: number;
}


export const RoadmapCard = ({ data, isLeft }: RoadmapCardProps) => {
  return (
    <div className={`${isLeft ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#0b1f1a] to-[#132924] p-8 rounded-[16px] h-[180px]`}>
      <div className='flex justify-between'>
        <h2 className="text-white text-22">{data.title}</h2>
        <p className="text-primary text-22 font-bold">P{data.index}</p>
      </div>
      <p className="pt-4 text-13 text-pink line-clamp-4 text-left">{data.description}</p>
    </div>
  );
}

