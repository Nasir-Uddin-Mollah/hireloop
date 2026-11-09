"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import globe from "@/app/images/globe.png"
import logo from "@/app/images/logo.png"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

const roles = [
  { id: "seeker", label: "Seeker" },
  { id: "recruiter", label: "Recruiter" },
  { id: "admin", label: "Admin" },
] as const

type Role = (typeof roles)[number]["id"]

export default function SignUpPage() {
  const router = useRouter()

  const [role, setRole] = useState<Role>("seeker")
  const [showPassword, setShowPassword] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    const { name, email, password } = Object.fromEntries(
      formData.entries()
    ) as { name: string; email: string; password: string }

    try {
      const { error: err } = await authClient.signUp.email({
        name,
        email,
        password,
        role,
      })

      if (err) {
        setError(err.message ?? "Something went wrong. Please try again.")
        return
      }

      router.push("/")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#07060a] px-4 pt-28 pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 flex items-end justify-center overflow-hidden">
        <Image
          src={globe}
          alt=""
          aria-hidden
          priority
          className="h-auto w-[1150px] max-w-none object-bottom opacity-60 select-none sm:w-[1400px] lg:w-[1700px]"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#07060a] via-[#07060a]/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07060a] to-transparent" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex flex-col items-center gap-3">
          <Link href="/">
            <Image
              src={logo}
              alt="HireLoop"
              width={140}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
          <h1 className="text-2xl font-bold text-white">Create your account</h1>
          <p className="text-sm text-neutral-400">
            Join thousands of job seekers on HireLoop
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d0c13]/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-neutral-300"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-neutral-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="john@example.com"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-300">
                Join as
              </label>
              <div className="grid grid-cols-3 gap-2">
                {roles.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    className={cn(
                      "flex h-11 items-center justify-center rounded-xl border text-sm font-medium transition-all",
                      role === item.id
                        ? "border-indigo-500 bg-indigo-600/20 text-white shadow-sm shadow-indigo-500/20"
                        : "border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-neutral-200"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm font-medium text-neutral-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  placeholder="Min. 8 characters"
                  className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 pr-11 text-sm text-white placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-500 transition-colors hover:text-neutral-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="mt-1 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-md shadow-indigo-900/40 transition-colors hover:bg-indigo-500 disabled:opacity-60"
            >
              {pending && <Loader2 className="size-4 animate-spin" />}
              {pending ? "Creating account…" : "Create account"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
