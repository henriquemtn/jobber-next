import { JobData } from './Job';

export type ScheduleData = {
  user: { id: number; name: string };
  days: [{ date: { day: string; weekend: boolean; event: boolean }; jobs: JobData[]; minutes_per_day: number }];
};
