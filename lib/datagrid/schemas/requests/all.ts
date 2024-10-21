// * Permissions
import { REQUESTS_PERMISSIONS } from "@/lib/permissions"

// * Models
import { IAuthData } from "@/models"

export const schema = (user: IAuthData): IDataFilterSchema[] => {
  const viewAllRequests = user.permissions.includes(
    REQUESTS_PERMISSIONS.VIEW_ALL_REQUESTS_BY_DEFAULT
  )

  return [
    {
      entity: "ids",
      label: "ID da Solicitação (separar por vírgula)",
      type: "search",
    },
    {
      entity: "title",
      label: "Título",
      type: "search",
    },
    {
      entity: "priorities",
      label: "Prioridade",
      type: "select",
      field: "priority",
    },
    {
      entity: "seen_internally",
      label: "Visto internamente",
      type: "select",
      options: [
        {
          id: "true",
          name: "Sim",
        },
        {
          id: "false",
          name: "Não",
        },
      ],
    },
    {
      entity: "seen_by_customer",
      label: "Visto pelo cliente",
      type: "select",
      options: [
        {
          id: "true",
          name: "Sim",
        },
        {
          id: "false",
          name: "Não",
        },
      ],
    },
    {
      entity: "requeststatus",
      label: "Status",
      type: "select",
      field: "status",
    },
    {
      entity: "user",
      name: "name",
      field: "user",
      label: "Solicitante",
      type: "select",
      allowCustomers: true,
    },
    {
      entity: "package_responsible_or_follower",
      label: "Responsável",
      type: "select",
      options: [
        {
          id: "responsible",
          name: "Somente eu",
        },
        {
          id: "follower",
          name: "Sou seguidor",
        },
      ],
      defaultValue: viewAllRequests ? null : "responsible",
      firstOptionById: viewAllRequests ? null : "responsible",
    },
    {
      entity: "customer",
      label: "Cliente:",
      type: "select",
    },
    {
      entity: "project",
      label: "Projetos",
      type: "select",
      fieldCondition: "customer",
    },
    {
      entity: "package",
      label: "Pacotes",
      type: "select",
      fieldCondition: "customer",
    },
  ]
}
