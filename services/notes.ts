import { NoteData, NotePostData, NotePutData, TodaysHoursData } from '@/models';
import api from '@/services/api';

const ENDPOINT = '/notes';

export const fetchNotesByJobId = async (jobId: number) => {
  const { data } = await api.get<NoteData[]>(`${ENDPOINT}?job=${jobId}`);
  return data;
};

export const fetchTodaysHours = async () => {
  const { data } = await api.get<TodaysHoursData>(`${ENDPOINT}/todays_hours`);
  return data;
};

export const createNote = async (data: NotePostData) => {
  const { data: response } = await api.post<NoteData>(ENDPOINT, data);
  return response;
};

export const updateNote = async (data: NotePutData) => {
  const { data: response } = await api.put<NoteData>(`${ENDPOINT}/${data.id}`, data);
  return response;
};

export const deleteNote = async (data: NoteData) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`);
  return response;
};
