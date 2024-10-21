type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

type TFilterEntity =
  | 'start'
  | 'finish'
  | 'customer'
  | 'project'
  | 'package'
  | 'status'
  | 'budget'
  | 'user'
  | 'bonus'
  | 'title'
  | 'responsible'
  | 'ids'
  | 'year'
  | 'month'
  | 'priorities'
  | 'seen_internally'
  | 'seen_by_customer'
  | 'requeststatus'
  | 'package_responsible_or_follower'
  | 'servicetype'
  | 'name'
  | 'email'
  | 'is_active'
  | 'package_responsible';

type TFilterType = 'select' | 'search' | 'datepicker';
type TFilterOptions = {
  id: string;
  name: string;
};
type TFilterPermissionTypes = 'add' | 'change' | 'delete' | 'view';
declare type TFilterPermissions = PartialRecord<TFilterPermissionTypes, string[]>;

declare interface IDataFilterSchema {
  name?: string;
  field?: string;
  entity: TFilterEntity;
  defaultDateValue?: Date;
  defaultValue?: any;
  fieldCondition?: string;
  label: string;
  type: TFilterType;
  options?: TFilterOptions[];
  allowAll?: boolean;
  allowCustomers?: boolean;
  permissions?: TFilterPermissions;
  withPackages?: boolean;
  firstOption?: boolean;
  firstOptionById?: string | number | null | undefined;
  required?: boolean;
}
