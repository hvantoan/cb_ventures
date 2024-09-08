import { FileUploadIcon } from '@fumy/ui/assets/icons';
import { Fade, IconButton, Tooltip, Typography } from '@mui/material';
import { clsx } from 'clsx';
import NextImage from 'next/image';
import { useCallback } from 'react';
import { DropzoneOptions, ErrorCode, useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import { Image } from '@/models/image';

interface ImageUploaderProps extends DropzoneOptions {
  image?: Image;
  className?: string;
  onChange?: (image: Image) => void;
}

const INSTRUCTION = 'Kéo và thả hoặc nhấn để chọn ảnh';
const TOOLTIP = 'Xóa ảnh';
const WRONG_IMAGE_TYPE_ERROR_MESSAGE = 'Hình ảnh không hợp lệ';

const onDropRejected: DropzoneOptions['onDropRejected'] = (fileRejections) => {
  const fileRejection = fileRejections[0];
  switch (fileRejection.errors[0].code) {
    case ErrorCode.FileInvalidType: {
      toast.error(WRONG_IMAGE_TYPE_ERROR_MESSAGE);
      break;
    }
    default:
      break;
  }
};

const ImageUploader: React.FC<ImageUploaderProps> = ({ image, className, onChange, ...props }) => {
  const onDropAccepted = useCallback(
    async (files: Array<File>) => {
      const res = await new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          const base64 = (reader.result as string)?.replace('data:', '').replace(/^.+,/, '');
          resolve(base64);
        };
        reader.onerror = (error) => reject(error);
      });
      if (image) {
        const newImage = URL.createObjectURL(files[0]);

        onChange?.({ ...image, image: newImage, name: files[0]?.name, data: res as string });
      } else {
        const newImage = new Image();
        newImage.name = files[0].name;
        const newImageData = URL.createObjectURL(files[0]);
        newImage.image = newImageData;
        newImage.data = res as string;

        onChange?.(newImage);
      }
    },
    [image]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted,
    onDropRejected,
    accept: { 'image/*': [] },
    ...props
  });

  const handleRemoveImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onChange?.({ ...image!, image: '' });
    },
    [image]
  );

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div
        className={clsx(
          'relative flex h-[205px] w-full cursor-pointer flex-col items-center justify-center rounded-lg',
          'group border border-dashed border-gray-500/20 bg-gray-500/10',
          className
        )}
      >
        <div
          className={clsx(
            'flex h-auto w-48 flex-col items-center justify-center',
            {
              hidden: Boolean(image?.image)
            },
            'group-hover:[&>svg]:opacity-75'
          )}
        >
          <FileUploadIcon />
          <Typography typography='body2' textAlign='center'>
            {INSTRUCTION}
          </Typography>
        </div>
        {image?.image && (
          <Fade in>
            <div className='absolute bottom-2 left-2 right-2 top-2 z-10 flex items-center justify-center'>
              <Tooltip title={TOOLTIP} arrow>
                <IconButton className='absolute right-0 top-0 z-20 !p-1' color='error' onClick={handleRemoveImage}>
                  <span className='i-solar-close-circle-bold-duotone h-6 w-6' />
                </IconButton>
              </Tooltip>
              <NextImage
                width={500}
                height={500}
                src={image.image}
                unoptimized
                alt={image.name ?? 'preview'}
                className='h-full max-h-full w-auto max-w-full rounded-lg object-center'
              />
            </div>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
