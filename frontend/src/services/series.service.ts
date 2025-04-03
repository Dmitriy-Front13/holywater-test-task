import { ISeries } from "@/types";
import { fetchInstance } from "./fetchInstance";
import { FormSchema } from "@/components/oneSeries/oneSeriesForm";

export const getAllSeries = async () => {
  try {
    const response = await fetchInstance<ISeries[]>("/series");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneSeriesById = async (id: string) => {
  try {
    const response = await fetchInstance<ISeries>(`/series/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateOneSeries = async (id: string, oneSeries: FormSchema) => {
  try {
    await fetchInstance(`/series/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify(oneSeries),
    });

    return true;
  } catch (error) {
    throw error;
  }
};
export const createOneSeries = async (oneSeries: FormSchema) => {
  try {
    await fetchInstance<ISeries>("/series", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(oneSeries),
    });
    return true;
  } catch (error) {
    throw error;
  }
};
