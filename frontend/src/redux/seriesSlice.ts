import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ISeries } from "@/types";
import { getAllSeries } from "@/services/series.service";

export const fetchAllSeries = createAsyncThunk("series/fetchAll", async () => {
  const series = await getAllSeries();
  return series;
});

interface SeriesState {
  series: ISeries[];
  isLoading: boolean;
}

const initialState: SeriesState = {
  series: [],
  isLoading: false,
};

const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSeries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllSeries.fulfilled, (state, action) => {
        state.series = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllSeries.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default seriesSlice.reducer;
