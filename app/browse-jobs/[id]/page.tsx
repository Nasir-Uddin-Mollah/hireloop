import { notFound } from "next/navigation"
import { Navbar } from "@/components/shared/navbar"
import { getJobById } from "@/lib/api/jobs"

import { JobHeaderCard } from "./_components/job-header-card"
import { JobHighlights } from "./_components/job-highlights"
import { JobContentCard } from "./_components/job-content-card"
import { CompanyOverviewCard } from "./_components/company-overview-card"

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const job = await getJobById(id)

  if (!job) notFound()

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <JobHeaderCard job={job} />

        <div className="mt-6 flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_397px] lg:gap-6">
          <div className="flex min-w-0 flex-col gap-6">
            <JobHighlights job={job} />
            <JobContentCard job={job} />
          </div>

          <div>
            <CompanyOverviewCard job={job} />
          </div>
        </div>
      </main>
    </>
  )
}
