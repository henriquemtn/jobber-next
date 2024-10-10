export type CustomerData = {
  id: number;
  name: string;
  date_created: string;
  date_updated: string;
};
export type CustomerPostData = Pick<CustomerData, 'name'>;
export type CustomerPutData = Pick<CustomerData, 'id' | 'name'>;
export type CustomerFilterData = { id: number; name: string };
