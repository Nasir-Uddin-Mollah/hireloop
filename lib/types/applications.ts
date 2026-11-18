import type { JobType } from "@/lib/types/jobs"

export type ApplicationStatus =
  "applied" | "review" | "interview" | "shortlisted" | "rejected" | "offered"

export const STATUS_META: Record<
  ApplicationStatus,
  { label: string; color: string }
> = {
  applied: { label: "Applied", color: "#A1A4AA" },
  review: { label: "Review", color: "#F59E0B" },
  interview: { label: "Interview", color: "#5C53FE" },
  shortlisted: { label: "Shortlisted", color: "#60A5FA" },
  rejected: { label: "Rejected", color: "#EF4444" },
  offered: { label: "Offered", color: "#22C55E" },
}

/** All selectable statuses, in pipeline order. */
export const APPLICATION_STATUSES = Object.keys(STATUS_META) as ApplicationStatus[]

export type ApplicationFormData = {
  jobId: string
  userId: string
  email: string
  jobTitle: string
  companyName: string
  jobType: JobType
  isRemote: boolean
  location: string
  minSalary: string
  maxSalary: string
  salaryFrequency: string
  deadline: string
  appliedAt: string
  status: ApplicationStatus
  archived: boolean
}

export type ApplicationRow = ApplicationFormData & {
  _id: string
}
