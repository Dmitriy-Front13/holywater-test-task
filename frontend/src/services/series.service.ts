import { ISeries } from "@/types";
import { fetchInstance } from "./fetchInstance";

export const getAllSeries = async () => {
  try {
    const response = await fetchInstance<ISeries[]>("/series");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSeriesById = async (id: string) => {
  try {
    const response = await fetchInstance<ISeries>(`/series/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
