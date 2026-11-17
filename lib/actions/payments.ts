const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000"

export const checkoutVerify = async (sessionId: string) => {
  try {
    const response = await fetch(`${BASE_URL}/payments/checkout-verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionId }),
      cache: "no-store",
    })

    const contentType = response.headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      return await response.json()
    }

    const text = await response.text()
    return {
      success: false,
      message: text || `Server returned ${response.status}`,
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to connect to backend",
    }
  }
}
