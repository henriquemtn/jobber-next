"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { fetchJobs } from '@/services/jobs';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface JobFilters {
  responsible?: number;
  has_open_note?: boolean;
}

export default function HomePage() {
  const { user, isCustomer } = useAuth();
  const navigate = useRouter();

  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  });
  const { page, pageSize } = paginationModel;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filters, setFilters] = useState<JobFilters>({
    responsible: user ? user.id : undefined,
    has_open_note: true,
  });

  useEffect(() => {
    if (isCustomer) navigate.push('/');
  }, [isCustomer, navigate]);

  const { refetch, isLoading, data: jobs } = useQuery({
    queryKey: ['jobs', page, pageSize, filters],
    queryFn: async () => {
      return await fetchJobs(page, pageSize, filters as Record<string, unknown>);
    },
    enabled: true,
  });

  useEffect(() => {
    refetch();
  }, [filters, page, pageSize, refetch]);

  const handleViewJob = ({ jobId }: { jobId: number }) => {
    navigate.push(`/jobs/details/${jobId}`);
  }

  console.log(jobs);

  return (
    <>
      <main className="flex flex-1 min-h-screen flex-col gap-4 md:ml-[72px] pt-[84px] pb-6 lg:gap-6 lg:px-6 dark:bg-[#0E0E10]">
        <div className="flex items-start flex-col">
          <h1 className="text-lg font-semibold md:text-2xl">Olá, {user?.name}</h1>
          <p>Aqui há uma lista dos seus Jobs!</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-[#18171B]">
            <thead className="bg-gray-100 dark:bg-[#18171B]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Título
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orçamento
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prazo interno
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Responsável
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Projeto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pacote
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tempo estimado
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            
            <tbody className="bg-white dark:bg-[#1F1E23] divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={11} className="px-6 py-4 text-center text-gray-500">Loading...</td>
                </tr>
              ) : Array.isArray(jobs?.results) && jobs.results.length > 0 ? (
                jobs.results.map((job) => (
                  <tr key={job.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{job.id}</td> {/* ID */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.customer?.name || "N/A"}</td> {/* Cliente */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.title}</td> {/* Título */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.budget ? "Sim" : "Não"}</td> {/* Orçamento */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.internal_term}</td> {/* Prazo interno */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.responsible?.name || "N/A"}</td> {/* Responsável */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.project?.name || "N/A"}</td> {/* Projeto */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.package?.name || "N/A"}</td> {/* Pacote */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.status?.name || "N/A"}</td> {/* Status */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">{job.estimated_time || "N/A"}</td> {/* Tempo estimado */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  dark:text-white">
                      <Button onClick={() => handleViewJob({ jobId: job.id })} variant="outline" className="mr-2">View</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11} className="px-6 py-4 text-center text-gray-500">No jobs available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            onClick={() => setPaginationModel({ ...paginationModel, page: Math.max(page - 1, 0) })}
            disabled={page === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setPaginationModel({ ...paginationModel, page: page + 1 })}
            disabled={!jobs || jobs.results.length < pageSize}
          >
            Next
          </Button>
        </div>
      </main>
    </>
  );
}
