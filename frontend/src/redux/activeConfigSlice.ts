import { IConfig } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IConfig = {
  _id: '',
  name: '',
  sections: []
}

export const activeConfigSlice = createSlice({
  name: 'activeConfig',
  initialState,
  reducers: {
    addActiveConfig(state, action: PayloadAction<IConfig>) {
      Object.assign(state, action.payload);
    },
    editName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    }
  }
})

export const { addActiveConfig, editName } = activeConfigSlice.actions;

export default activeConfigSlice.reducer;