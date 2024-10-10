export type ServiceTypeData = {
  id: number;
  name: string;
  can_customer_request: boolean;
  display_consumption: boolean;
  date_created: string;
  date_updated: string;
};
export type ServiceTypePostData = Pick<ServiceTypeData, 'name' | 'can_customer_request' | 'display_consumption'>;
export type ServiceTypePutData = ServiceTypePostData & { id: number };
export type ServiceTypeFilterData = { id: number; name: string };
