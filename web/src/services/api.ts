import type { ApiError, ApiResponse } from "../types/api";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("VITE_API_URL is not defined");
}

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  let data: unknown = null;

  if (response.status !== 204) {
    data = await response.json();
  }

  if (!response.ok) {
    const error: ApiError =
      typeof data === "object" && data !== null
        ? (data as ApiError)
        : {
            error: "API error",
            statusCode: response.status,
          };

    throw error;
  }

  if (!data) {
    return undefined as unknown as T;
  }

  const result = data as ApiResponse<T>;
  return result.data;
}
