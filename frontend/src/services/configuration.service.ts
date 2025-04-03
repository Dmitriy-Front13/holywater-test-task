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
    await fetchInstance(`/configurations/${config._id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify(config),
    });

    return true;
  } catch (error) {
    throw error;
  }
};
export const createConfiguration = async () => {
  try {
    const response = await fetchInstance<IConfig>("/configurations", {
      method: "post",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteConfiguration = async (id: string) => {
  try {
    await fetchInstance(`/configurations/${id}`, {
      method: "delete",
    });
    return true;
  } catch (error) {
    throw error;
  }
};
