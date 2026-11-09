"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import globe from "@/app/images/globe.png"
import logo from "@/app/images/logo.png"
import { authClient } from "@/lib/auth-client"

export default function SignInPage() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    setError("")

    const formData = new FormData(e.currentTarget)

    const { email, password } = Object.fromEntries(
      formData.entries()
    ) as { email: string; password: string }

    try {
      const { error: err } = await authClient.signIn.email({
        email,
        password,
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
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-sm text-neutral-400">
            Sign in to continue your job search
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d0c13]/80 p-8 shadow-2xl shadow-black/60 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-neutral-300"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Your password"
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
              {pending ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  )
}
