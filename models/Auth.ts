import { UserData } from './User';

export type AuthData = Omit<UserData, 'vtex_stores'> & { permissions: string[] };
export type LoginData = { access: string; refresh: string };
