export type FAQData = {
  id: number;
  question: string;
  answer: string;
  is_active: boolean;
  date_created: string;
  date_updated: string;
};
export type FAQPostData = Omit<FAQData, 'id' | 'date_created' | 'date_updated'>;
export type FAQPutData = FAQPostData & { id: number };
