import React from 'react'
import { Button } from '@/components/ui/button'

export default function JobsPage() {
  return (
    <>
      <main className="flex flex-1 min-h-screen flex-col gap-4 ml-20 mt-[60px] lg:gap-6 lg:p-6 dark:bg-[#191919]">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Jobs</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">Jobs</h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div>
        </main>
    </>
  )
}