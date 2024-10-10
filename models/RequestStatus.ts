export type RequestStatusData = {
  id: number;
  name: string;
  color: string;
  description: string;
  order: number;
  can_customer_edit: boolean;
  is_finished: boolean;
  date_created: string;
  date_updated: string;
};
export type RequestStatusFilterData = { id: number; name: string };
