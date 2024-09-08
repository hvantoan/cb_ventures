import AttachFileIcon from '@mui/icons-material/AttachFile';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';

interface Props {
  item: Article;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  category: string;
  img: string;
  author: string;
  authorImg: string;
  postDate: string;
  favouriteBy: string;
  viewedBy: string;
  slug?: string;
}

function ArticlesCard({ item }: Props) {
  const { content, title, img } = item;

  return (
    <figure
      className='bg-wh_color/80 rounded-10 shadow-wh_color hover:border-primary group m-0 mb-0 grid grid-rows-2 border border-transparent p-6'
      data-aos='fade-up'
      data-aos-duration='800'
    >
      <div className='after:rounded-10 relative after:absolute after:right-0 after:top-0 after:h-0 after:w-full after:bg-[#0a0a0a15] after:transition-all after:duration-300 group-hover:after:h-full'>
        <Image
          className='rounded-10 aspect-video w-full'
          src={`/ventures/img/blogs/${img}`}
          alt='Blog'
          width='455'
          height='217'
        />
      </div>
      <figcaption>
        <div className='mt-2.5 flex items-center justify-between'>
          <span className='text-light text-15 inline-block dark:text-white/60'>Web Development</span>
          <span className='text-light text-15 inline-block dark:text-white/60'>01/07/2024</span>
        </div>
        <h2 className='mb-3 mt-4 text-xl font-semibold'>
          <div className='group-hover:text-h_primary text-white/[.87]'>{title}</div>
        </h2>
        <p className='text-subtext mb-4 text-base'>{content}</p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-4'>
            <Image
              className='max-w-[32px] rounded-full'
              src='/ventures/img/chat-author/t1.jpg'
              alt=''
              width='32'
              height='32'
            />
            <span className='text-15 text-white/60'>Lê Khôi</span>
          </div>
          <ul className='-m-2 flex items-center'>
            <li className='m-2'>
              <span className='text-13 flex items-center gap-x-1 leading-none text-white/60'>
                <FavoriteBorderIcon className='h-3 w-3 text-white/60' />
                <span className='text-13 flex items-center leading-none text-white/60'>70</span>
              </span>
            </li>
            <li className='m-2'>
              <span className='text-13 flex items-center gap-x-1 leading-none text-white/60'>
                <AttachFileIcon className='h-3 w-3 text-white/60' />
                <span className='text-13 flex items-center leading-none text-white/60'>120</span>
              </span>
            </li>
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}

export default ArticlesCard;
