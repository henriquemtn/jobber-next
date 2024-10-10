import { IdAndName } from '@/models';

type NotificationServiceData = IdAndName & { checked: boolean };
type NotificationTypeData = IdAndName & {
  description: string;
  services: NotificationServiceData[];
};
export type NotificationData = {
  id: number;
  notifications: NotificationTypeData[];
};
export type NotificationPatchData = {
  user: string;
  notifications: Array<{
    id: number;
    services: Array<{
      id: number;
      checked: boolean;
    }>;
  }>;
};
