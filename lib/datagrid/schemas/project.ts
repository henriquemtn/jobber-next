export const schema: IDataFilterSchema[] = [
  {
    entity: 'ids',
    label: 'ID da Solicitação (separar por vírgula)',
    type: 'search',
  },
  {
    entity: 'title',
    label: 'Título',
    type: 'search',
  },
  {
    entity: 'priorities',
    label: 'Prioridade',
    type: 'select',
    field: 'priority',
  },
  {
    entity: 'seen_internally',
    label: 'Visto internamente',
    type: 'select',
    options: [
      {
        id: 'true',
        name: 'Sim',
      },
      {
        id: 'false',
        name: 'Não',
      },
    ],
  },
  {
    entity: 'seen_by_customer',
    label: 'Visto pelo cliente',
    type: 'select',
    options: [
      {
        id: 'true',
        name: 'Sim',
      },
      {
        id: 'false',
        name: 'Não',
      },
    ],
  },
  {
    entity: 'requeststatus',
    label: 'Status',
    type: 'select',
    field: 'status',
  },
  {
    entity: 'user',
    name: 'name',
    field: 'user',
    label: 'Solicitante',
    type: 'select',
    allowCustomers: true,
  },
];
