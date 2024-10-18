// * Helpers
import { VerifyPermission } from "@/helpers/verifyPermission"

// * Permissions
import {
  APPS_PERMISSIONS as APPS,
  FAQS_PERMISSIONS as FAQS,
  POSTS_PERMISSIONS as POSTS,
  SERVICES_PERMISSIONS as SERVICES,
  GROUPS_PERMISSIONS as GROUPS,
  USERS_PERMISSIONS as USERS,
  EVENTS_PERMISSIONS as EVENTS,
  CUSTOMERS_PERMISSIONS as CUSTOMERS,
  PROJECTS_PERMISSIONS as PROJECTS,
  PACKAGES_PERMISSIONS as PACKAGES,
  WALLETPACKAGES_PERMISSIONS as WALLETPACKAGES,
  BONUS_PERMISSIONS as BONUS,
  STATUS_PERMISSIONS as STATUS,
  SCHEDULE_DEADLINE_PERMISSIONS as SCHEDULE_DEADLINE,
  SCHEDULE_PRODUCTION_PERMISSIONS as SCHEDULE_PRODUCTION,
  JOBS_PERMISSIONS as JOBS,
  REPORT_NOTES_PERMISSIONS as REPORT_NOTES,
  REPORT_CUSTOMERS_PERMISSIONS as REPORT_CUSTOMERS,
  REPORT_JOBS_PERMISSIONS as REPORT_JOBS,
  DASHBOARDS_PERMISSIONS as DASHBOARDS,
} from "@/lib/permissions"

export const appsPermissions = [APPS.ADD, APPS.VIEW, APPS.CHANGE, APPS.DELETE]
export const faqsPermissions = [FAQS.ADD, FAQS.VIEW, FAQS.CHANGE, FAQS.DELETE]
export const postsPermissions = [
  POSTS.ADD,
  POSTS.VIEW,
  POSTS.CHANGE,
  POSTS.DELETE,
]
export const servicesPermissions = [
  SERVICES.ADD,
  SERVICES.VIEW,
  SERVICES.CHANGE,
  SERVICES.DELETE,
]
export const groupsPermissions = [
  GROUPS.ADD,
  GROUPS.VIEW,
  GROUPS.CHANGE,
  GROUPS.DELETE,
]
export const usersPermissions = [
  USERS.ADD,
  USERS.VIEW,
  USERS.CHANGE,
  USERS.DELETE,
]
export const eventsPermissions = [
  EVENTS.ADD,
  EVENTS.VIEW,
  EVENTS.CHANGE,
  EVENTS.DELETE,
]
export const customersPermissions = [
  CUSTOMERS.ADD,
  CUSTOMERS.VIEW,
  CUSTOMERS.CHANGE,
  CUSTOMERS.DELETE,
]
export const projectsPermissions = [
  PROJECTS.ADD,
  PROJECTS.VIEW,
  PROJECTS.CHANGE,
  PROJECTS.DELETE,
]
export const packagesPermissions = [
  PACKAGES.ADD,
  PACKAGES.VIEW,
  PACKAGES.CHANGE,
  PACKAGES.DELETE,
]
export const walletPackagesPermissions = [
  WALLETPACKAGES.ADD,
  WALLETPACKAGES.VIEW,
  WALLETPACKAGES.CHANGE,
  WALLETPACKAGES.DELETE,
]
export const bonusPermissions = [
  BONUS.ADD,
  BONUS.VIEW,
  BONUS.CHANGE,
  BONUS.DELETE,
]
export const statusPermissions = [
  STATUS.ADD,
  STATUS.VIEW,
  STATUS.CHANGE,
  STATUS.DELETE,
]
export const deadlinePermission = [SCHEDULE_DEADLINE.VIEW]
export const productionPermission = [SCHEDULE_PRODUCTION.VIEW]
export const jobsPermissions = [JOBS.VIEW]
export const reportNotesPermissions = [REPORT_NOTES.VIEW]
export const reportCustomersPermissions = [REPORT_CUSTOMERS.VIEW]
export const reportJobsPermissions = [REPORT_JOBS.VIEW]
export const devPermissions = [DASHBOARDS.VIEW_DEV]

export const usePermission = () => {
  const fn = (decoratorPermission: string[]) =>
    VerifyPermission(decoratorPermission)

  return {
    verifyPermission: fn,
    appsPermissions: fn(appsPermissions),
    faqsPermissions: fn(faqsPermissions),
    postsPermissions: fn(postsPermissions),
    servicesPermissions: fn(servicesPermissions),
    groupsPermissions: fn(groupsPermissions),
    usersPermissions: fn(usersPermissions),
    eventsPermissions: fn(eventsPermissions),
    customersPermissions: fn(customersPermissions),
    projectsPermissions: fn(projectsPermissions),
    packagesPermissions: fn(packagesPermissions),
    walletPackagesPermissions: fn(walletPackagesPermissions),
    bonusPermissions: fn(bonusPermissions),
    statusPermissions: fn(statusPermissions),
    deadlinePermission: fn(deadlinePermission),
    productionPermission: fn(productionPermission),
    jobsPermissions: fn(jobsPermissions),
    reportNotesPermissions: fn(reportNotesPermissions),
    reportCustomersPermissions: fn(reportCustomersPermissions),
    reportJobsPermissions: fn(reportJobsPermissions),
    devPermissions: fn(devPermissions),
  }
}