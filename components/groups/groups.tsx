"use client";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnGroups } from "@/lib/datatable/columns/groups";

// * Services
import { fetchGroups } from "@/services";

// * Hooks
import { DataTable } from "../table";
import { IGroupData } from "@/models";

export const GroupsDashboard = () => {

  return (
    <Page
      title="Grupos:"
      breadcrumb={[["Grupos", "/groups/"]]}
      contentSize="max"
    >
        <DataTable<IGroupData, unknown>
          queryKey="groups"
          queryFn={fetchGroups}
          columns={columnGroups}
          filterColumn="nome"
        />
    </Page>
  );
};
