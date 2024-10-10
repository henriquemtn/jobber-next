import { CustomerData } from './Customer';

export type ProjectData = {
  id: number;
  customer: CustomerData;
  name: string;
  estimated_time: string;
  is_active: boolean;
  can_customer_view: boolean;
  can_customer_request: boolean;
  date_created: string;
  date_updated: string;
};
export type ProjectPostData = Pick<
  ProjectData,
  'name' | 'estimated_time' | 'is_active' | 'can_customer_view' | 'can_customer_request'
> & { customer: number };
export type ProjectPutData = ProjectPostData & { id: number };
export type ProjectFilterData = { id: number; name: string };
