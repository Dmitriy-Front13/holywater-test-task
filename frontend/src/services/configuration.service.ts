import { IConfig } from "@/types";
import { fetchInstance } from "./fetchInstance";

export const getAllConfigurations = async () => {
  try {
    const response = await fetchInstance<IConfig[]>("/configurations");
    return response.data;
  } catch (error) {
    throw error;
  }
};