/**
 * ? Filter schema for users
 */

export const schema: IDataFilterSchema[] = [
  {
    entity: 'name',
    label: 'Nome:',
    type: 'search',
  },
  {
    entity: 'email',
    label: 'E-mail:',
    type: 'search',
  },
  {
    entity: 'is_active',
    label: 'Ativo',
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
];
