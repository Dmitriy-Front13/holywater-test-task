import { IItemListProps } from "@/components/screenEditor/itemsList";
import { IConfig, ISection } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IConfig = {
  _id: '',
  name: '',
  isMain: false,
  sections: []
}

export const activeConfigSlice = createSlice({
  name: 'activeConfig',
  initialState,
  reducers: {
    addActiveConfig(state, action: PayloadAction<IConfig>) {
      Object.assign(state, action.payload);
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

export const { addActiveConfig, editConfigName, editSections, editSectionItems } = activeConfigSlice.actions;

export default activeConfigSlice.reducer;