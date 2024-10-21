'use client'

// * Components
import { Page } from "@/components/page"
import { Skeleton } from "@/components/ui/skeleton"
import { DataTable } from "../data-table/data-table-wrapper"

// * Constants
import { columns } from "@/lib/data-table/columns/groups"

export const GroupsDashboard = () => {

  return (
    <Page
      title="Grupos:"
      breadcrumb={[["Grupos", "/groups/"]]}
      contentSize="max"
    >
      {true ? (
        <DataTable data={[]} columns={columns} />

      ) : (
        <Skeleton className="w-full h-full" />
      )}
    </Page>
  )
}



