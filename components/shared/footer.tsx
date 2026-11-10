import Link from "next/link"
import Image from "next/image"
import ctaBg from "@/app/images/cta-bg.png"
import logo from "@/app/images/logo.png"

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "#" },
      { label: "Companies", href: "/company" },
      { label: "Salary data", href: "#" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "#" },
      { label: "Career library", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8">
        <div className="relative isolate flex flex-col items-center overflow-hidden pt-16 pb-16 text-center sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 -z-10 flex justify-center">
            <div className="relative h-full w-full max-w-6xl">
              <div className="pointer-events-none absolute top-0 left-1/2 h-48 w-3/4 -translate-x-1/2 rounded-full bg-[#5a51f9]/35 blur-3xl sm:h-64" />
              <Image
                src={ctaBg}
                alt=""
                aria-hidden
                className="h-full w-full object-cover object-top opacity-95 select-none"
              />
            </div>
          </div>

          <h2 className="max-w-2xl text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your next role is
            <br />
            already looking for you
          </h2>

          <p className="mt-4 max-w-lg text-sm text-neutral-300/90 sm:text-base">
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/signup"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-neutral-950 shadow-lg transition-colors hover:bg-neutral-200"
            >
              Create a free account
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-6 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/[0.12]"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 lg:col-span-6">
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logo}
                alt="HireLoop"
                width={154}
                height={44}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 lg:col-span-6">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-medium text-[#635bff]">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-[#0d0d11] text-neutral-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Pinterest"
              className="flex size-9 items-center justify-center rounded-lg bg-[#5a51f9] text-white shadow-md shadow-indigo-900/40 transition-colors hover:bg-indigo-500"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.176-4.068-2.845 0-4.516 2.135-4.516 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-[#0d0d11] text-neutral-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500">
            <span>Copyright 2024 — Programming Hero</span>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="transition-colors hover:text-neutral-300"
              >
                Terms &amp; Policy
              </Link>
              <span>·</span>
              <Link
                href="#"
                className="transition-colors hover:text-neutral-300"
              >
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
