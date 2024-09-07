import { Avatar } from '@mui/material';

export type VisionData = {
  title: string;
  description: string;
  url: string;
};

export type VisionCardProps = {
  data: VisionData;
};

export function VisionCard({ data }: VisionCardProps) {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='800'
      className='from-bg_color_trans to-bg_color hover:border-primary grid gap-4 rounded-2xl border border-transparent bg-gradient-to-br p-8 drop-shadow-lg'
    >
      <div className='flex justify-center'>
        <Avatar alt={data.title} src={data.url} sx={{ width: 96, height: 96 }} className='bg-white object-contain' />
      </div>
      <h3 className='text-22 m-0 text-center capitalize text-white'>{data.title}</h3>
      <p className='text-16 m-0 text-center normal-case text-gray-300'>{data.description}</p>
    </div>
  );
}
