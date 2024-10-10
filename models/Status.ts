export type StatusData = {
  id: number;
  name: string;
  color: string;
  description: string;
  order: number;
  can_finish: boolean;
  active: boolean;
  date_created: string;
  date_updated: string;
};
export type StatusPostData = Pick<StatusData, 'name' | 'color' | 'description' | 'order' | 'can_finish' | 'active'>;
export type StatusPutData = StatusPostData & { id: number };
export type StatusFilterData = { id: number; name: string };
