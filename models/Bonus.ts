export type BonusData = {
  id: number;
  reason: string;
  date_created: string;
  date_updated: string;
};
export type BonusPostData = Pick<BonusData, 'reason'>;
export type BonusPutData = BonusPostData & { id: number };
export type BonusFilterData = { id: number; name: string };
