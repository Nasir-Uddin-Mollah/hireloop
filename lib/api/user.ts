"use server"

import { auth } from "../auth"
import { headers } from "next/headers"
import { authFetch } from "../core/server"

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const getUsers = async () => {
    const res = await authFetch(`${BASE_URL}/users`)
    return res.json()
}

export const getUserPremiumById = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/users/${userId}/premium`)
  return response.json()
}
