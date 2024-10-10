export type ContractData = {
  id: number;
  date: string;
  validity: string | null;
  is_indeterminate: boolean;
  hours: number;
  hour_price: number | string;
  hour_price_extra: number | string;
};
