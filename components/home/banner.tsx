"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2, Compass, Home, MapPin, Search, Star } from "lucide-react"
import globe from "@/app/images/globe.png"
import { Button } from "@/components/ui/button"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

const stats = [
  {
    icon: Home,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: Building2,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Compass,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfication Rate",
  },
]

export function Banner() {
  const [searchRole, setSearchRole] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleSelectTrending = (role: string) => {
    setSearchRole(role)
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#07060a] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-0 flex items-start justify-center overflow-hidden">
        <Image
          src={globe}
          alt="Glowing earth background"
          priority
          className="h-auto w-[1150px] max-w-none object-top opacity-95 select-none sm:w-[1350px] md:w-[1550px] lg:w-[1700px] xl:w-[1880px]"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-80 bg-gradient-to-b from-[#07060a] via-[#07060a]/95 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="flex items-center gap-3">
          <div className="hidden h-px w-10 bg-gradient-to-r from-transparent to-neutral-700 sm:block sm:w-16" />
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121118]/80 px-4 py-1.5 shadow-lg backdrop-blur-md">
            <span className="text-sm">💼</span>
            <span className="text-xs font-semibold tracking-wider text-white">
              50,000+
            </span>
            <span className="text-[11px] font-medium tracking-widest text-neutral-400 uppercase sm:text-xs">
              New Jobs This Month
            </span>
          </div>
          <div className="hidden h-px w-10 bg-gradient-to-l from-transparent to-neutral-700 sm:block sm:w-16" />
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Find Your Dream Job Today
        </h1>

        <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 sm:text-base">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role – faster.
        </p>

        <form
          onSubmit={handleSearch}
          className="mt-8 w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0d0c13]/85 p-2 shadow-2xl shadow-indigo-950/30 backdrop-blur-xl sm:rounded-full sm:p-2 sm:pr-2 sm:pl-5"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2.5 px-3 py-1.5 sm:px-0">
              <Search className="size-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={searchRole}
                onChange={(e) => setSearchRole(e.target.value)}
                placeholder="Job title, skill or company"
                className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
              />
            </div>

            <div className="hidden h-6 w-px shrink-0 bg-neutral-800 sm:block" />

            <div className="flex flex-1 items-center gap-2.5 border-t border-neutral-800/80 px-3 py-1.5 sm:border-t-0 sm:px-2">
              <MapPin className="size-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              size="icon"
              aria-label="Search jobs"
              className="size-10 shrink-0 self-end rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/30 transition-transform hover:bg-indigo-500 active:scale-95 sm:self-auto sm:rounded-full"
            >
              <Search className="size-4.5" />
            </Button>
          </div>
        </form>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <span className="text-xs text-neutral-400 sm:text-sm">
            Trending Position
          </span>
          {trendingPositions.map((pos) => (
            <button
              key={pos}
              type="button"
              onClick={() => handleSelectTrending(pos)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-neutral-300 backdrop-blur-sm transition-all hover:border-neutral-600 hover:bg-white/10 hover:text-white"
            >
              {pos}
            </button>
          ))}
        </div>

        <div className="mt-28 text-center sm:mt-36 md:mt-44 lg:mt-52">
          <h2 className="mx-auto max-w-xl text-xl leading-snug text-neutral-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-2xl md:text-3xl">
            Assisting over{" "}
            <span className="font-semibold text-white">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0e0d14]/85 p-6 shadow-xl shadow-black/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#151420]/90"
              >
                <div className="relative">
                  <Icon
                    className="mb-7 size-5 text-neutral-400 transition-colors group-hover:text-indigo-300"
                    strokeWidth={1.75}
                  />
                  <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs text-neutral-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
