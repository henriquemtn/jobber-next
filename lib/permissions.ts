export enum APPS_PERMISSIONS {
  ADD = "app.add_app",
  VIEW = "app.view_app",
  CHANGE = "app.change_app",
  DELETE = "app.delete_app",
}

export enum FAQS_PERMISSIONS {
  ADD = "app.add_faq",
  VIEW = "app.view_faq",
  CHANGE = "app.change_faq",
  DELETE = "app.delete_faq",
}

export enum POSTS_PERMISSIONS {
  ADD = "app.add_post",
  VIEW = "app.view_post",
  CHANGE = "app.change_post",
  DELETE = "app.delete_post",
}

export enum SERVICES_PERMISSIONS {
  ADD = "app.add_service",
  VIEW = "app.view_service",
  CHANGE = "app.change_service",
  DELETE = "app.delete_service",
}

export enum GROUPS_PERMISSIONS {
  ADD = "auth.add_group",
  VIEW = "auth.view_group",
  CHANGE = "auth.change_group",
  DELETE = "auth.delete_group",
}

export enum USERS_PERMISSIONS {
  ADD = "backend.add_user",
  VIEW = "backend.view_user",
  CHANGE = "backend.change_user",
  DELETE = "backend.delete_user",
}

export enum EVENTS_PERMISSIONS {
  ADD = "backend.add_event",
  VIEW = "backend.view_event",
  CHANGE = "backend.change_event",
  DELETE = "backend.delete_event",
}

export enum CUSTOMERS_PERMISSIONS {
  ADD = "backend.add_customer",
  VIEW = "backend.view_customer",
  CHANGE = "backend.change_customer",
  DELETE = "backend.delete_customer",
}

export enum PROJECTS_PERMISSIONS {
  ADD = "backend.add_project",
  VIEW = "backend.view_project",
  CHANGE = "backend.change_project",
  DELETE = "backend.delete_project",
}

export enum PACKAGES_PERMISSIONS {
  ADD = "backend.add_package",
  VIEW = "backend.view_package",
  CHANGE = "backend.change_package",
  DELETE = "backend.delete_package",
}

export enum WALLETPACKAGES_PERMISSIONS {
  ADD = "backend.add_walletpackage",
  VIEW = "backend.view_walletpackage",
  CHANGE = "backend.change_walletpackage",
  DELETE = "backend.delete_walletpackage",
}

export enum BONUS_PERMISSIONS {
  ADD = "backend.add_bonus",
  VIEW = "backend.view_bonus",
  CHANGE = "backend.change_bonus",
  DELETE = "backend.delete_bonus",
}

export enum STATUS_PERMISSIONS {
  ADD = "backend.add_status",
  VIEW = "backend.view_status",
  CHANGE = "backend.change_status",
  DELETE = "backend.delete_status",
}

export enum SCHEDULE_DEADLINE_PERMISSIONS {
  VIEW = "contenttypes.view_deadline",
}

export enum SCHEDULE_PRODUCTION_PERMISSIONS {
  VIEW = "contenttypes.view_production",
}

export enum JOBS_PERMISSIONS {
  ADD = "backend.add_job",
  ADD_JOB_BONUS = "backend.add_job_bonus",
  VIEW = "backend.view_job",
  VIEW_JOB_CUSTOMER_TERM = "backend.view_customer_term",
  VIEW_JOB_PACKAGE_CONSUMPTION = "backend.view_job_package_consumption",
  VIEW_ALL_JOBS_BY_DEFAULT = "backend.view_all_jobs_by_default",
  CHANGE = "backend.change_job",
  CHANGE_JOB_BONUS = "backend.change_job_bonus",
  CHANGE_JOB_STATUS = "backend.change_job_status",
  DELETE = "backend.delete_job",
}

export enum REQUESTS_PERMISSIONS {
  VIEW_ALL_REQUESTS_BY_DEFAULT = "backend.view_all_requests_by_default",
}

export enum REPORT_NOTES_PERMISSIONS {
  VIEW = "contenttypes.view_report_notes",
  VIEW_NOTES_OF_ANOTHER_USERS = "contenttypes.view_notes_of_another_users",
}

export enum REPORT_CUSTOMERS_PERMISSIONS {
  VIEW = "contenttypes.view_report_customers",
}

export enum REPORT_JOBS_PERMISSIONS {
  VIEW = "contenttypes.view_report_jobs",
}

export enum DASHBOARDS_PERMISSIONS {
  VIEW_DEV = "contenttypes.view_dashboard_dev",
}
