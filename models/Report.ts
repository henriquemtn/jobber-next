import { IdAndName } from '.';

export type ReportGenerateData = {
  check_status: string;
};
export enum ReportStatus {
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export type CheckReportStatusData = {
  state: ReportStatus;
  link: string;
  email: boolean;
};
export type CustomerResultData = {
  id: number;
  status: IdAndName & { color: string };
  customer_term: string;
  title: string;
  package_consumption: number;
};
export type CustomerReportListData = {
  customer: IdAndName;
  package: IdAndName & { servicetype: { id: number; display_consumption: true } };
  results: CustomerResultData[];
};
export type JobReportData = {
  id: number;
  title: string;
  customer: IdAndName;
  project: IdAndName | null;
  package: (IdAndName & { servicetype: { id: number; display_consumption: true } }) | null;
  budget: true;
  status: IdAndName & { color: string };
  consumption: number;
  requester: IdAndName;
  responsible: IdAndName;
  bonus: { id: number; reason: string };
  request: number;
  start: string;
  finish: string | null;
  internal_term: string;
  customer_term: string;
  package_date: string;
  estimated_time: number;
  minutes_per_day: number;
  qtd_days: number;
  orcamentos_mensais: [{ year: number; month: string; days: number; budget: number }];
};
export type NoteReportData = {
  id: number;
  job: {
    id: number;
    title: string;
    budget: true;
    customer: IdAndName;
    package: (IdAndName & { servicetype: { id: number; display_consumption: true } }) | null;
    request: { id: number; title: string };
    estimated_time: number;
    bonus: { id: number; reason: string };
    project: IdAndName | null;
  };
  user: IdAndName;
  minutes: number;
  description: string;
  start: string;
  finish: string;
  date_created: string;
  date_updated: string;
};
export type PackageReportData = {
  id: number;
  name: string;
  customer: IdAndName;
  hours: number;
  consumption: number;
  exceeded: number | null;
};
