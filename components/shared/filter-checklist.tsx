"use client"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"

export type FilterOption = {
  value: string
  label: string
  count?: number
}

export function FilterChecklist({
  legend,
  name,
  options,
  multiple = true,
  defaultValue = [],
}: {
  legend: string
  name: string
  options: readonly FilterOption[]
  multiple?: boolean
  defaultValue?: readonly string[]
}) {
  const inputType = multiple ? "checkbox" : "radio"

  const router = useRouter()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(window.location.search)
    params.set(name, event.target.value)
    router.push(`/browse-jobs?${params.toString()}`)
  }

  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-base font-semibold tracking-[-0.02em] text-[#EDEDEF]">
        {legend}
      </legend>
      <div className="flex flex-col gap-1">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 py-1 text-[13px] font-medium text-[#A0A0AB] capitalize transition-colors hover:text-[#EDEDEF] has-[:checked]:text-[#EDEDEF]"
          >
            <input
              type={inputType}
              name={name}
              value={option.value}
              onChange={handleInputChange}
              defaultChecked={defaultValue.includes(option.value)}
              className="peer sr-only"
            />
            <span
              aria-hidden
              className="pointer-events-none flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-[#1A1A1F] text-transparent transition-colors peer-checked:border-[#5C53FE] peer-checked:bg-[#5C53FE] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#5C53FE]/60"
            >
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="truncate">{option.label}</span>
            {option.count != null ? (
              <span className="ml-auto text-xs text-[#6E6E78]">
                {option.count}
              </span>
            ) : null}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
