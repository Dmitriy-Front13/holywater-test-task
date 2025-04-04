import { IItemListProps } from "@/components/configuration/screenEditor/series/seriesList";
import { IConfig, ISection } from "@/types";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: IConfig = {
  _id: "",
  name: "",
  isMain: false,
  updatedAt: new Date(),
  createdAt: new Date(),
  sections: [],
};

const createNewSection = (): ISection => ({
  _id: uuidv4(),
  type: "horizontalGrid",
  title: "Top Chart",
  showTitle: false,
  showItemsTitle: false,
  items: [],
});

export const activeConfigSlice = createSlice({
  name: "activeConfig",
  initialState,
  reducers: {
    addActiveConfig(state, action: PayloadAction<IConfig>) {
      Object.assign(state, action.payload);
    },
    addNewActiveConfig(state) {
      Object.assign(state, initialState);
    },
    editConfigName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    editConfigIsMain(state, action: PayloadAction<boolean>) {
      state.isMain = action.payload;
    },
    addNewSection(state) {
      state.sections.push(createNewSection());
    },
    removeSectionById(state, action: PayloadAction<string>) {
      state.sections = state.sections.filter(
        (section) => section._id !== action.payload
      );
    },
    updateSectionField<K extends keyof ISection>(
      state: Draft<IConfig>,
      action: PayloadAction<{
        sectionId: string;
        key: K;
        value: ISection[K];
      }>
    ) {
      const { sectionId, key, value } = action.payload;
      const section = state.sections.find((s) => s._id === sectionId);
      if (section) {
        section[key] = value;
      }
    },
    editSections(state, action: PayloadAction<ISection[]>) {
      state.sections = action.payload;
    },
    editSectionItems(state, action: PayloadAction<IItemListProps>) {
      const index = state.sections.findIndex(
        (section) => section._id === action.payload.sectionId
      );
      state.sections[index].items = action.payload.items;
    },
  },
});

export const {
  addActiveConfig,
  editConfigName,
  editSections,
  editSectionItems,
  addNewActiveConfig,
  editConfigIsMain,
  addNewSection,
  removeSectionById,
  updateSectionField,
} = activeConfigSlice.actions;

export default activeConfigSlice.reducer;
