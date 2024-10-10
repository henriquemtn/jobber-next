export type ServiceData = {
  id: number;
  name: string;
  short_name: string;
  description: string;
  thumbnail: string;
  features: string;
  badge: string;
  is_active: boolean;
  date_created: string;
  date_updated: string;
};
export type ServicePostData = Omit<ServiceData, 'id' | 'thumbnail' | 'date_created' | 'date_updated'> & {
  thumbnail: File;
};
export type ServicePutData = Omit<ServicePostData, 'thumbnail'> & { id: number };
export type ServicePatchThumbnailData = Pick<ServiceData, 'id'> & { thumbnail: File };
