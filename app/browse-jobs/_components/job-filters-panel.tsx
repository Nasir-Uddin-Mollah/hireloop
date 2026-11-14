import {
  FilterChecklist,
  type FilterOption,
} from "@/components/shared/filter-checklist"
import { JOB_CATEGORIES, JOB_TYPES, type JobRow } from "@/lib/types/jobs"

const countOptions = (
  facet: (job: JobRow) => string,
  allOptions: readonly string[],
  jobs: readonly JobRow[]
): FilterOption[] =>
  allOptions.map((option) => ({
    value: option,
    label: option,
    count: jobs.filter((job) => facet(job) === option).length,
  }))

export function JobFiltersPanel({ jobs }: { jobs: readonly JobRow[] }) {
  return (
    <section className="surface-card p-6">
      <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-[#EDEDEF]">
        Filters
      </h2>

      <div className="mt-7 flex flex-col gap-6">
        <FilterChecklist
          legend="Job Type"
          name="jobType"
          multiple={false}
          options={countOptions((job) => job.jobType, JOB_TYPES, jobs)}
        />
        <FilterChecklist
          legend="Job Category"
          name="category"
          multiple={false}
          options={countOptions((job) => job.category, JOB_CATEGORIES, jobs)}
        />
        <FilterChecklist
          legend="Work Arrangement"
          name="isRemote"
          options={[
            {
              value: "remote",
              label: "Remote only",
              count: jobs.filter((job) => job.isRemote).length,
            },
          ]}
        />
      </div>
    </section>
  )
}
