import {
    RequestPaginated,
    JobData,
    JobPatchFollowersData,
    JobPatchStatusData,
    JobPostData,
    JobPutData,
  } from '@/models';
  import api from '@/services/api';
  
  const ENDPOINT = '/jobs';
  
  type IFetchJobFilters = {
    responsible?: string;
    has_open_note?: string;
    customer?: string;
    project?: string;
    package?: string;
    status?: string;
    user?: string;
    ids?: string;
    year?: string;
    month?: string;
  };
  
  export const fetchJobs = async (page = 0, pageSize = 10, filters?: IFetchJobFilters) => {
    const params = filters ? `&${String(new URLSearchParams(filters))}` : '';
    const { data } = await api.get<RequestPaginated<JobData>>(`${ENDPOINT}?p=${page + 1}&page_size=${pageSize}${params}`);
    return data;
  };
  
  export const fetchJobById = async (id: number) => {
    const { data } = await api.get<JobData>(`${ENDPOINT}/${id}`);
    return data;
  };
  
  export const importJob = async (data: { file: File }) => {
    const formData = new FormData();
    formData.append('file', data.file);
  
    const config = { headers: { 'Content-Type': undefined } };
  
    const { data: response } = await api.post<JobData[]>(`${ENDPOINT}/import`, formData, config);
    return response;
  };
  
  type GenerateJobImportData = {
    customer: number;
    project: number | null;
    package: number | null;
    requester: number;
    responsible: number[];
    status: number;
    bonus: number | null;
    request: number;
    package_consumption: string | null;
    estimated_time: string;
    budget: boolean;
    package_date: string | null;
  };
  
  export const generateJobImportExample = async (data: GenerateJobImportData) => {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: { request: { responseType: string }; response: { data: Blob } }) => {
        const { request, response } = error;
  
        if (
          request.responseType === 'blob' &&
          response.data instanceof Blob &&
          response.data.type &&
          response.data.type.toLowerCase().includes('json')
        ) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              response.data = JSON.parse(reader.result as string);
              resolve(Promise.reject(error));
            };
            reader.onerror = () => reject(error);
            reader.readAsText(response.data);
          });
        }
        return Promise.reject(error);
      },
    );
  
    const { data: response } = await api.post<Blob | string[]>(`${ENDPOINT}/generate_import_example`, data, {
      responseType: 'blob',
    });
    return response;
  };
  
  export const createJob = async (data: JobPostData) => {
    const { data: response } = await api.post<JobData>(ENDPOINT, data);
    return response;
  };
  
  export const updateJob = async (data: JobPutData) => {
    const { data: response } = await api.put<JobData>(`${ENDPOINT}/${data.id}`, data);
    return response;
  };
  
  export const updateJobStatus = async (data: JobPatchStatusData) => {
    const { data: response } = await api.patch<JobData>(`${ENDPOINT}/${data.id}`, data);
    return response;
  };
  
  export const updateJobFollowers = async (data: JobPatchFollowersData) => {
    const { data: response } = await api.patch<JobData>(`${ENDPOINT}/${data.id}`, data);
    return response;
  };
  
  export const fetchJobsByRequestId = async (requestId: number) => {
    const { data } = await api.get<JobData[]>(`/requests/${requestId}/jobs`);
    return data;
  };
  