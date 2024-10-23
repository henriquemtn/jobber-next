"use client";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnCostumers } from "@/lib/datatable/columns/customers";

// * Services
import { fetchCustomers } from "@/services";

// * Hooks
import { DataTable } from "../table";
import { ICustomerData } from "@/models";

export const CustomersDashboard = () => {

  return (
    <Page
      title="Clientes:"
      breadcrumb={[["Clientes", "/customers/"]]}
      contentSize="max"
      addButton
      buttonLink="/customers/new"
    >
    <DataTable<ICustomerData, unknown>
          queryKey="customers"
          queryFn={fetchCustomers}
          columns={columnCostumers}
          filterColumn="nome"
        />
    </Page>
  );
};
