"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogOut, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import logo from "@/app/images/logo.png"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const handleSignOut = async () => {
    await authClient.signOut()
    router.refresh()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#1e1e1e]">
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

          {isPending ? (
            <div className="h-9 w-28 animate-pulse rounded-lg bg-neutral-800" />
          ) : session?.user ? (
            <div className="flex items-center gap-3 pl-1">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                  <User className="size-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="max-w-[120px] truncate text-xs font-medium text-white">
                    {session.user.name || session.user.email}
                  </span>
                  {session.user.role && (
                    <span className="text-[10px] text-neutral-400 capitalize">
                      {session.user.role}
                    </span>
                  )}
                </div>
              </div>
              <div className="group relative flex items-center">
                <button
                  type="button"
                  onClick={handleSignOut}
                  title="Sign out"
                  aria-label="Sign out"
                  className="flex size-8 cursor-pointer items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  <LogOut className="size-4" />
                </button>
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md border border-neutral-700/60 bg-neutral-900 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-neutral-200 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                  Sign out
                </span>
              </div>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                className="ml-1 inline-flex h-9 items-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white shadow-md shadow-indigo-900/40 transition-colors hover:bg-indigo-500"
              >
                Get Started
              </Link>
            </>
          )}
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

            {session?.user ? (
              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="flex size-9 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400">
                    <User className="size-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium text-white">
                      {session.user.name || session.user.email}
                    </span>
                    {session.user.role && (
                      <span className="text-xs text-neutral-400 capitalize">
                        {session.user.role}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false)
                    handleSignOut()
                  }}
                  className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-800 text-sm font-medium text-red-400 hover:bg-neutral-700 hover:text-red-300"
                >
                  <LogOut className="size-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Sign In
                </Link>

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
