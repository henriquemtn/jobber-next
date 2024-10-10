import { IdAndName } from './Common';

export type CommentData = {
  id: number;
  job: { id: number; title: string };
  user: IdAndName;
  comment: string;
  date_created: string;
  date_updated: string;
};
export type CommentPostData = { job: number; comment: string };
export type CommentPutData = CommentPostData & { id: number };
