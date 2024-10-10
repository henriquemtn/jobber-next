import { UserData, CustomerData } from '@/models';

export type WalletPackageData = {
  id: number;
  responsible: UserData;
  packages: [{ id: number; name: string }];
  date_created: string;
  date_updated: string;
};
export type ListWalletPackageData = {
  id: number;
  responsible: UserData;
  packages: [{ id: number; name: string; customer: CustomerData; servicetype: number }];
};
