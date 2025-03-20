import { IConfig } from "@/types";
import { fetchInstance } from "./fetchInstance";

export const getConfigurationById = async (id: string) => {
  try {
    const response = await fetchInstance<IConfig>(`/configurations/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllConfigurations = async () => {
  try {
    const response = await fetchInstance<IConfig[]>("/configurations");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateConfiguration = async (config: IConfig) => {
  try {
    await fetchInstance<IConfig>(`/configurations/${config._id}`, {
      method: "patch",
      body: JSON.stringify(config),
    });
  } catch (error) {
    throw error;
  }
};
export const createConfiguration = async (config: IConfig) => {
  try {
    const response = await fetchInstance<IConfig>("/configurations", {
      method: "post",
      body: JSON.stringify(config),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

