const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
type ErrorItem = { message: string };

interface ErrorResponse {
  error: ErrorItem | ErrorItem[];
}

export const fetchInstance = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api${endpoint}`, {
      ...options,
    });
    if (!response.ok) {
      const { error } = (await response.json()) as ErrorResponse;
      if (Array.isArray(error)) {
        throw new Error(error.map((error) => error.message).join(", "));
      }
      throw new Error(error.message);
    }
    return response.json();
  } catch (error) {
    console.error(`Помилка: ${error}`);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("Something went wrong");
  }
};
