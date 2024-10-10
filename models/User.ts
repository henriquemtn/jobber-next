import { CustomerData, GroupData, IdAndName, VTEXStoreData } from '@/models';

export type UserData = IdAndName & {
  first_name: string;
  last_name: string;
  email: string;
  customer: CustomerData[];
  vtex_stores: VTEXStoreData[];
  groups: GroupData[];
  is_active: boolean;
  is_customer: boolean;
  is_internal: boolean;
  is_staff: boolean;
  is_superuser: boolean;
};
export type UserFilterData = Pick<UserData, 'id' | 'name' | 'is_customer' | 'is_staff'>;
export type UserListData = Pick<UserData, 'id' | 'name' | 'first_name' | 'last_name' | 'email' | 'is_active'>;
export type UserRetrieveData = UserData;
export type UserPostData = Pick<UserData, 'first_name' | 'last_name' | 'email' | 'is_staff' | 'is_active'> & {
  customer: number[];
  groups: number[];
};
export type UserPutData = Pick<UserData, 'id' | 'first_name' | 'last_name' | 'email' | 'is_staff' | 'is_active'> & {
  customer: number[];
  groups: number[];
};
