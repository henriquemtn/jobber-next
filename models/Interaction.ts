import { UserData, RequestData } from '.';

export type InteractionData = {
  id: number;
  user: Pick<UserData, 'id' | 'name'>;
  request: Pick<RequestData, 'id' | 'title'>;
  description: string;
  system: boolean;
  intern: boolean;
  date_created: string;
  date_updated: string;
};
export type InteractionPostData = { request: number; description: string };
export type InteractionPutData = InteractionPostData & { id: number };
