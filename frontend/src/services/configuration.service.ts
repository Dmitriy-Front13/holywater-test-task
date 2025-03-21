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
    const response = await fetchInstance(`/configurations/${config._id}`, {
      method: "patch",
      body: JSON.stringify(config),
    });
    if (response.status === 200) {
      return true;
    }
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
    const response = await fetchInstance(`/configurations/${id}`, {
      method: "delete",
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw error;
  }
};
