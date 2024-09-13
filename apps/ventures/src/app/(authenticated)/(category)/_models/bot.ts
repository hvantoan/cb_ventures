import { Type } from 'class-transformer';
import 'reflect-metadata';

import { Image } from '@/models/image';

export class Bot {
  id: string;
  name: string = '';
  description: string;

  @Type(() => Image)
  avatar: Image;
}
