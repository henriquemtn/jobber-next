import { IdAndName, JobData, RequestData, UserData } from '.';

export type MediaData = {
  id: number;
  job: Pick<JobData, 'id' | 'title'> | null;
  request: Pick<RequestData, 'id' | 'title'> | null;
  app: IdAndName | null;
  service: IdAndName | null;
  user: Pick<UserData, 'id' | 'name'>;
  name: string;
  file: string;
  order: number | null;
  is_valid: boolean;
  date_created: string;
  date_updated: string;
};
export type MediaPostData = {
  user: number;
  job?: number;
  request?: number;
  app?: number;
  service?: number;
  name: string;
  file: string;
};
export type MediaPatchOrderData = Pick<MediaData, 'id' | 'order'>;
export interface IMediaProps {
  name: string;
  file: File;
  file_name: string;
  isUploading: boolean;
  percent: number;
}
