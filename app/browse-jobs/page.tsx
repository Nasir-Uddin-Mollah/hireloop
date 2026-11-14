import { Navbar } from "@/components/shared/navbar"
import { getJobs } from "@/lib/api/jobs"

import { JobSearchBar } from "./_components/job-search-bar"
import { JobFiltersPanel } from "./_components/job-filters-panel"
import JobCard from "../components/JobCard"

const resultsHeadingClass =
  "text-[22px] font-semibold tracking-[-0.02em] text-[#EDEDEF]"

export default async function BrowseJobsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const search = await searchParams
  const urlSearch = new URLSearchParams(search as Record<string, string>)
  const query = urlSearch.toString()

  const jobs = await getJobs(query)

  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <JobSearchBar />

        <div className="mt-6 flex flex-col gap-6 lg:grid lg:grid-cols-[296px_minmax(0,1fr)] lg:gap-8">
          <aside>
            <JobFiltersPanel jobs={jobs} />
          </aside>

          <section>
            <h2 className={resultsHeadingClass}>
              Found {jobs.length} Professional Jobs
            </h2>

            <ul className="mt-4 flex list-none flex-col gap-3">
              {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
              {jobs.length === 0 ? (
                <li className="surface-card p-10 text-center text-sm text-[#6E6E78]">
                  No jobs match your current search.
                </li>
              ) : null}
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}
