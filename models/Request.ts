import { UserData, PackageData, ProjectData, RequestStatusData, CustomerData, ServiceTypeData, PriorityData } from './';

export type RequestData = {
  id: number;
  user: UserData;
  user_created: UserData;
  responsible: UserData | null;
  user_last_modified: UserData;
  followers: number[];
  package: PackageData | null;
  project: ProjectData | null;
  status: RequestStatusData;
  customer: CustomerData;
  servicetype: ServiceTypeData;
  priority: PriorityData;
  title: string;
  description: string;
  seen_internally: boolean;
  customer_term: string | null;
  finish: string;
  date_created: string;
  date_updated: string;
};
export type RequestPatchStatusData = Pick<RequestData, 'id'> & { status: number };
export type RequestPatchCustomerTermData = Pick<RequestData, 'id' | 'customer_term'>;
export type RequestPatchFollowersData = Pick<RequestData, 'id' | 'followers'>;
export type RequestPutData = Pick<RequestData, 'id' | 'title' | 'description'> & {
  user: number;
  package?: number;
  project?: number;
  priority: number;
};
export type RequestPostData = Omit<RequestPutData, 'id'>;
