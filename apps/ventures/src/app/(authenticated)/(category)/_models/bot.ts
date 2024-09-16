import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import 'reflect-metadata';

import { Image } from '@/models/image';

export class Bot {
  id: string;

  @IsNotEmpty({ message: 'Tên Bot không được để trống' })
  name: string = '';

  description?: string;

  @Type(() => Image)
  avatar: Image;
}
