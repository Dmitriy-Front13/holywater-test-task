import { IItemListProps } from "@/components/screenEditor/itemsList";
import { IConfig, ISection } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState: IConfig = {
  _id: `temp-${uuidv4()}`,
  name: '',
  isMain: false,
  sections: [
    {
      _id: uuidv4(),
      type: "slider",
      items: [],
    },
    {
      _id: uuidv4(),
      type: "horizontalGrid",
      title: "Top Chart",
      items: [],
    },
    {
      _id: uuidv4(),
      type: "horizontalList",
      title: "Most Trending",
      items: [],
    },
    {
      _id: uuidv4(),
      type: "banner",
      items: [],
    },
    {
      _id: uuidv4(),
      type: "horizontalList",
      title: "Continue Watching",
      items: [],
    },
    {
      _id: uuidv4(),
      type: "verticalGrid",
      title: "Most Popular",
      items: [],
    },
  ]
}

export const activeConfigSlice = createSlice({
  name: 'activeConfig',
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
    editSections(state, action: PayloadAction<ISection[]>) {
      state.sections = action.payload;
    },
    editSectionItems(state, action: PayloadAction<IItemListProps>) {
      const index = state.sections.findIndex((section) => section._id === action.payload.sectionId);
      state.sections[index].items = action.payload.items;
    }
  }
})

export const { addActiveConfig, editConfigName, editSections, editSectionItems, addNewActiveConfig } = activeConfigSlice.actions;

export default activeConfigSlice.reducer;