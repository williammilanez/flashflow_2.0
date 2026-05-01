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
    const errorMessage =
      typeof data === "object" && data !== null && "error" in data
        ? (data as { error: string }).error
        : "API error";

    throw new Error(`${response.status} - ${errorMessage}`);
  }

  return (data as { data: T })?.data;
}
