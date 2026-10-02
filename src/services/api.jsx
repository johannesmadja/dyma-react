const BASE_API_URL = "https://restapi.fr/api";

export async function apiFetch(endpoint, options = {}) {
  const response = await fetch(`${BASE_API_URL}${endpoint}`, {
    ...options,
    headers: {
      // Only send Content-Type when there is a body: on a GET it triggers a CORS preflight
      ...(options.body && { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    let error = `Erreur HTTP : ${response.status}`;

    try {
      const errorData = await response.json();

      if (errorData?.message) {
        error = errorData.message;
      }
    } catch {
      // empty block
    }

    throw new Error(error);
  }

  return response.json();
}
