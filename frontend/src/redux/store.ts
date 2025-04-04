import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import configurationReducer from "./activeConfigSlice";
import seriesReducer from "./seriesSlice";
export const store = configureStore({
  reducer: {
    activeConfig: configurationReducer,
    series: seriesReducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
