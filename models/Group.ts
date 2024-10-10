import { IdAndName } from '@/models';

export type GroupData = IdAndName & { permissions: string[] };
