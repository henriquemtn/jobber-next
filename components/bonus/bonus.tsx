"use client";

// * Components
import { Page } from "@/components/page";

// * Constants
import { columnBonus } from "@/lib/datatable/columns/bonus";

// * Services
import { fetchBonuses } from "@/services";

// * Hooks
import { DataTable } from "../table";
import { IBonusData } from "@/models";

export const BonusDashboard = () => {

  return (
    <Page
      title="Bônus:"
      breadcrumb={[["Bônus", "/bonus/"]]}
      contentSize="max"
    >
    <DataTable<IBonusData, unknown>
          queryKey="bonus"
          queryFn={fetchBonuses}
          columns={columnBonus}
          filterColumn="nome"
        />
    </Page>
  );
};
