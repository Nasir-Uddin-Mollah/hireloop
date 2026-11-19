import type {
  ApplicationFormData,
  ApplicationRow,
} from "@/lib/types/applications"
import { authFetch, protectedMutation } from "@/lib/core/server"


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getApplications = async (query = ""): Promise<ApplicationRow[]> => {
    const api = `${BASE_URL}/applications?${query}`
    const res = await authFetch(api)
    return res.json()
}

export const getApplicationsCount = async (query = ""): Promise<{ count: number }> => {
    const res = await fetch(`${BASE_URL}/applications/count?${query}`)
    return res.json()
}

export const createApplication = async (data: ApplicationFormData) => {
    const api = `${BASE_URL}/applications`;
    const res = await protectedMutation(api, "POST", data)
    return res.json()
}
