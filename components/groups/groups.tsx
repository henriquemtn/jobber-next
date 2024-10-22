"use client";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnGroups } from "@/lib/datatable/groups";

// * Services
import { fetchGroups } from "@/services";

// * Hooks
import { DataTable } from "../table";

export const GroupsDashboard = () => {

  return (
    <Page
      title="Grupos:"
      breadcrumb={[["Grupos", "/groups/"]]}
      contentSize="max"
    >
        <DataTable
          queryKey="groups"
          queryFn={fetchGroups}
          columns={columnGroups}
          filterColumn="nome"
        />
    </Page>
  );
};
