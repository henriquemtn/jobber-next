import React from 'react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <>
        <main className="flex flex-1 min-h-screen flex-col gap-4 md:ml-[72px] pt-[84px] pb-6 lg:gap-6 lg:px-6 dark:bg-[#0E0E10]">
            <div className="flex items-center">
              <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            </div>
            <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
              <div className="flex flex-col items-center gap-1 text-center">
                <h3 className="text-2xl font-bold tracking-tight">Dashboard</h3>
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
