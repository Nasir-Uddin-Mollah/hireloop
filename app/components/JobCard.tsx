import Link from "next/link"

const JobCard = ({
  job,
}: {
  job: {
    _id: string
    title: string
    companyName: string
    location: string
    isRemote: boolean
  }
}) => {
  return (
    <li>
      <Link
        href={`/browse-jobs/${job._id}`}
        className="surface-card block p-6 transition-colors hover:border-white/20"
      >
        <h3 className="font-heading text-lg font-semibold text-[#EDEDEF]">
          {job.title}
        </h3>
        <p className="mt-1 text-sm text-[#6E6E78]">
          {job.companyName} • {job.location}
          {job.isRemote ? " (Remote)" : ""}
        </p>
      </Link>
    </li>
  )
}

export default JobCard
