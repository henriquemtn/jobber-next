"use client";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnUsers } from "@/lib/datatable/columns/users";

// * Services
import { fetchUsers } from "@/services";

// * Hooks
import { DataTable } from "../table";
import { IUserListData } from "@/models";

export const UsersDashboard = () => {

  return (
    <Page
      title="Usuários:"
      breadcrumb={[["Usuários", "/users/"]]}
      contentSize="max"
      addButton
      buttonLink="/users/new"
    >
    <DataTable<IUserListData, unknown>
          queryKey="users"
          queryFn={fetchUsers}
          columns={columnUsers}
          filterColumn="nome"
        />
    </Page>
  );
};
