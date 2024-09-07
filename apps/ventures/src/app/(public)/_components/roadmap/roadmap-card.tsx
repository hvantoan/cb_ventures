import { Typography } from '@mui/material';

export type RoadmapCardProps = {
  data: RoadmapItem;
  isLeft: boolean;
};

export type RoadmapItem = {
  title: string;
  description: string;
  index: number;
};

export function RoadmapCard({ data, isLeft }: RoadmapCardProps) {
  return (
    <div
      className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
      data-aos={`${isLeft ? 'fade-right' : 'fade-left'}`}
      data-aos-duration='800'
    >
      <div
        className={`${isLeft ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'} from-bg_color_trans to-bg_color grid w-[calc(100%/2-50px)] gap-4 rounded-[16px] p-8 max-sm:w-full max-sm:p-4`}
      >
        <div className='flex justify-between'>
          <Typography typography='h3' className='text-24 text-white'>
            {data.title}
          </Typography>
          <span className='text-h_primary text-24 font-bold'>P{data.index}</span>
        </div>
        <p className='text-15 m-0 line-clamp-6 text-white'>{data.description}</p>
      </div>
    </div>
  );
}
