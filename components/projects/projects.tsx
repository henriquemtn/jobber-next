"use client";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnProjects } from "@/lib/datatable/columns/projects";

// * Services
import { fetchProjects } from "@/services";

// * Hooks
import { DataTable } from "../table";
import { IProjectData } from "@/models";

export const ProjectsDashboard = () => {

  return (
    <Page
      title="Projetos:"
      breadcrumb={[["Projetos", "/projects/"]]}
      contentSize="max"
    >
        <DataTable<IProjectData, unknown>
          queryKey="projects"
          queryFn={fetchProjects}
          columns={columnProjects}
          filterColumn="nome"
        />
    </Page>
  );
};
