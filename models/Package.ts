import { ContractData } from './Contract';
import { CustomerData } from './Customer';
import { ServiceTypeData } from './ServiceType';
import { UserData } from './User';

export type PackageData = {
  id: number;
  customer: CustomerData;
  servicetype: ServiceTypeData;
  responsible: UserData | null;
  contracts: ContractData[];
  name: string;
  is_active: boolean;
  can_customer_view: boolean;
  date_created: string;
  date_updated: string;
};
export type PackagePostData = Pick<PackageData, 'name' | 'is_active' | 'can_customer_view'> & {
  customer: number;
  servicetype: number;
};
export type PackagePutData = PackagePostData & { id: number; responsible: number };
export type PackageConsumptionData = {
  consumption: number;
  contract: { hours: number };
  period: string;
};
export type PackageFilterData = { id: number; name: string };
