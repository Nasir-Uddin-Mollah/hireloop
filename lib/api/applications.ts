import type {
  ApplicationFormData,
  ApplicationRow,
} from "@/lib/types/applications"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getApplications = async (
  query = ""
): Promise<ApplicationRow[]> => {
  const res = await fetch(`${BASE_URL}/applications?${query}`)
  return res.json()
}

export const createApplication = async (data: ApplicationFormData) => {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
