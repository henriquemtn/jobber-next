import { IdAndName } from './Common';

export type NoteData = {
  id: number;
  user: IdAndName;
  job: { id: number; title: string };
  minutes: number;
  description: string;
  start: string;
  finish: string;
  date_created: string;
  date_updated: string;
};
export type NotePostData = {
  job: number;
  description: string;
  start: string | Date;
  finish: string | Date;
};
export type NotePutData = NotePostData & { id: number };

export type TodaysHoursData = {
  minutes: number;
};
