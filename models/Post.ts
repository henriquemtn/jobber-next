import { PostTypeData } from './PostType';

export type PostData = {
  id: number;
  type: PostTypeData;
  title: string;
  content: string;
  short_description: string;
  thumbnail: string;
  link: string;
  author: string;
  highlight: boolean;
  date_published: string;
  date_created: string;
  date_updated: string;
};
export type PostPostData = Omit<PostData, 'id' | 'type' | 'thumbnail' | 'date_created' | 'date_updated'> & {
  type: number;
  thumbnail: File;
};
export type PostPutData = Omit<PostPostData, 'thumbnail'> & { id: number };
export type PostPatchThumbnailData = Pick<PostData, 'id'> & { thumbnail: File };
