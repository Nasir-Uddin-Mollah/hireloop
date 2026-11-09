"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import logo from "@/app/images/logo.png"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "#", active: true },
  { label: "Company", href: "#" },
  { label: "Pricing", href: "#" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-black px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="hireloop"
            width={154}
            height={44}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 rounded-xl bg-neutral-900 px-6 py-2.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm text-neutral-400 transition-colors hover:text-white",
                link.active &&
                  "font-medium text-white underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}

          <span className="h-5 w-px bg-neutral-700" />

          <Link
            href="#"
            className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Sign In
          </Link>

          <Button className="h-10 bg-indigo-600 px-4 text-white hover:bg-indigo-500">
            Get Started
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-lg p-2 text-neutral-300 hover:bg-neutral-900 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="mt-3 flex flex-col gap-4 rounded-xl bg-neutral-900 p-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm text-neutral-400 transition-colors hover:text-white",
                link.active &&
                  "font-medium text-white underline underline-offset-4"
              )}
            >
              {link.label}
            </Link>
          ))}

          <span className="h-px w-full bg-neutral-700" />

          <Link
            href="#"
            className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Sign In
          </Link>

          <Button className="h-10 bg-indigo-600 text-white hover:bg-indigo-500">
            Get Started
          </Button>
        </nav>
      )}
    </header>
  )
}
