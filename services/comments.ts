import { CommentData, CommentPostData, CommentPutData } from '@/models';
import api from '@/services/api';

const ENDPOINT = '/comments';

export const fetchCommentsByJobId = async (jobId: number) => {
  const { data } = await api.get<CommentData[]>(`${ENDPOINT}?job=${jobId}`);
  return data;
};

export const createComment = async (data: CommentPostData) => {
  const { data: response } = await api.post<CommentData>(ENDPOINT, data);
  return response;
};

export const updateComment = async (data: CommentPutData) => {
  const { data: response } = await api.put<CommentData>(`${ENDPOINT}/${data.id}`, data);
  return response;
};

export const deleteComment = async (data: CommentData) => {
  const { data: response } = await api.delete(`${ENDPOINT}/${data.id}`);
  return response;
};
