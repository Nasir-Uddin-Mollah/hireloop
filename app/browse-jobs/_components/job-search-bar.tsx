"use client"

import { useRouter } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

export function JobSearchBar() {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    const search = data.searchField

    const params = new URLSearchParams()
    if (search) {
      params.set("search", search as string)
    }
    router.push(`/browse-jobs?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="surface-card flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#141418] p-4 sm:flex-row sm:items-center sm:p-6"
    >
      <div className="relative flex-1">
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-[#8E9192]"
        />
        <Input
          name="searchField"
          aria-label="Search jobs"
          placeholder="Search by job title, keywords..."
          className="surface-field h-12 w-full rounded-xl border border-white/10 bg-[#1A1A1F] pr-3 pl-10 text-sm text-[#EDEDEF] placeholder:text-[#A0A0AB] focus-visible:border-[#5C53FE]/60 focus-visible:ring-[#5C53FE]/30"
        />
      </div>
      <button
        type="submit"
        className={cn(
          buttonVariants(),
          "h-12 shrink-0 rounded-xl bg-white px-6 font-semibold text-[#2F3131] hover:bg-white/90"
        )}
      >
        Search Jobs
      </button>
    </form>
  )
}
