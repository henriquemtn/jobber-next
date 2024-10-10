export type AppData = {
  id: number;
  name: string;
  description: string;
  short_description: string;
  thumbnail: string;
  features: string;
  badge: string;
  highlight: boolean;
  is_active: boolean;
  date_created: string;
  date_updated: string;
};
export type AppPostData = Omit<AppData, 'id' | 'thumbnail' | 'date_created' | 'date_updated'> & { thumbnail: File };
export type AppPutData = Omit<AppPostData, 'thumbnail'> & { id: number };
export type AppPatchThumbnailData = Pick<AppData, 'id'> & { thumbnail: File };
