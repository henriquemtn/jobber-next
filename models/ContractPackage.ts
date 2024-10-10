import { PackageData, ContractData } from '@/models';

export type ContractPackageData = {
  id: number;
  package: PackageData;
  contracts: ContractData[];
  date_created: string;
  date_updated: string;
};
