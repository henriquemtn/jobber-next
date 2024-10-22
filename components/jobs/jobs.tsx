"use client";

// * Next
import { useRouter } from "next/navigation";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnJobs } from "@/lib/datatable/columns/jobs";

// * Services
import { fetchJobs } from "@/services";

// * Hooks & Utils
import { DataTable } from "../table";
import { IJobData } from "@/models";

export const JobsDashboard = () => {
  const navigate = useRouter();

  const handleClickRow = (row: IJobData) => {
    navigate.push(`/jobs/details/${row.id}`);
  };

  return (
    <Page
      title="Jobs:"
      breadcrumb={[["Jobs", "/jobs/"]]}
      contentSize="max"
    >
        <DataTable
          queryKey="jobs"
          queryFn={fetchJobs}
          columns={columnJobs}
          filterColumn="nome"
          onClickRow={handleClickRow}
        />
    </Page>
  );
};
