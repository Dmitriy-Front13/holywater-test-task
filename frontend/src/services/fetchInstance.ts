const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface ApiResponse<T> {
  data: T;
  message: string;
}

interface ErrorResponse {
  errors: {
    msg: string;
  }[];
}

export const fetchInstance = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${BACKEND_URL}/api${endpoint}`, { ...options });
    if (!response.ok) {
      if (response.status === 400) {
        const { errors } = await response.json() as ErrorResponse;
        throw new Error(errors.map(error => error.msg).join(', '));
      }
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    console.error(`Ошибка: ${error}`);
    throw new Error(`Произошла ошибка: ${error}`);
  }
};
