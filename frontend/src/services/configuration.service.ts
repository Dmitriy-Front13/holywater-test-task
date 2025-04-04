import { IConfig, IConfigDTO, ISectionDTO } from "@/types";
import { fetchInstance } from "./fetchInstance";

const mapConfigToDTO = (config: IConfig): IConfigDTO => {
  return {
    name: config.name,
    isMain: config.isMain,
    sections: config.sections.map(
      (section): ISectionDTO => ({
        type: section.type,
        title: section.title,
        showTitle: section.showTitle,
        showItemsTitle: section.showItemsTitle,
        items: section.items.map((item) => item._id),
      })
    ),
  };
};

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
  const configDTO = mapConfigToDTO(config);
  try {
    await fetchInstance(`/configurations/${config._id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "put",
      body: JSON.stringify(configDTO),
    });

    return true;
  } catch (error) {
    throw error;
  }
};
export const createConfiguration = async (config: IConfig) => {
  const configDTO = mapConfigToDTO(config);
  try {
    const response = await fetchInstance<IConfig>("/configurations", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(configDTO),
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
