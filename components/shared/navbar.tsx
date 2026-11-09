"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import logo from "@/app/images/logo.png"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-[#1e1e1e]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="HireLoop"
            width={154}
            height={44}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 rounded-xl bg-[#222222] px-5 py-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-1.5 text-sm transition-colors",
                isActive(link.href)
                  ? "font-medium text-white"
                  : "text-neutral-400 hover:text-neutral-200"
              )}
            >
              {link.label}
            </Link>
          ))}

          <span className="mx-2 h-4 w-px bg-neutral-700" />

          <Link
            href="/sign-in"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="ml-1 inline-flex h-9 items-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white shadow-md shadow-indigo-900/40 transition-colors hover:bg-indigo-500"
          >
            Get Started
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-neutral-300 transition-colors hover:bg-neutral-800 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-800 bg-[#1e1e1e] md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm transition-colors",
                  isActive(link.href)
                    ? "bg-neutral-800 font-medium text-white"
                    : "text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-200"
                )}
              >
                {link.label}
              </Link>
            ))}

            <span className="my-2 h-px w-full bg-neutral-800" />

            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
