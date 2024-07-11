
export type RoadmapCardProps = {
  data: RoadmapItem
}


export type RoadmapItem = {
  title: string;
  description: string;
  index: number;
}


export const RoadmapCard = ({ data }: RoadmapCardProps) => {
  return (
    <div>
      <div className='flex justify-between'>
        <header>{data.title}</header>
        <p>P{data.index}</p>
      </div>
      <p>{data.description}</p>
    </div>
  );
}

