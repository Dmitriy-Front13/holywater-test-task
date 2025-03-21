import { IItemListProps } from "@/components/screenEditor/items/itemsList";
import { IConfig, ISection } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IConfig = {
  _id: "",
  name: '',
  isMain: false,
  updatedAt: new Date(),
  createdAt: new Date(),
  sections: []
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
    editConfigIsMain(state, action: PayloadAction<boolean>) {
      state.isMain = action.payload;
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

export const { addActiveConfig, editConfigName, editSections, editSectionItems, addNewActiveConfig, editConfigIsMain } = activeConfigSlice.actions;

export default activeConfigSlice.reducer;