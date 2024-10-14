import React from 'react'

export default function JobDetails() {
  return (
    <main className="flex flex-1 min-h-screen flex-col gap-4 ml-20 mt-[60px] lg:gap-6 lg:p-6 dark:bg-[#191919]">
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">Detalhes</h1>
    </div>
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">Relatorios</h3>
        <p className="text-sm text-muted-foreground">
          You can start selling as soon as you add a product.
        </p>
      </div>
    </div>
</main>
  )
}
