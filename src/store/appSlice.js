import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { namesConfig } from "../configs/names.config";

const initialState = {
  isLoading: true,
  allNames: [],
  nameData: {},
};

export const getAllNames = createAsyncThunk(
  "app/getAllNames",
  async () =>
    await axios
      .get("https://brand-bucket-server-ketantb.vercel.app/brand/all-brands")
      .then((res) => res.data.message)
);
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    viewName: (state, { payload }) => {
      state.nameData = payload;
    },
    addFav: (state, { payload }) => {
      state.allNames.find((i) => i.id === payload).favItem = true;
    },
    removeFav: (state, { payload }) => {
      state.allNames.find((i) => i.id === payload).favItem = false;
    },
  },
  extraReducers: {
    [getAllNames.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllNames.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.allNames = namesConfig.concat(payload);
    },
    [getAllNames.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default appSlice.reducer;
export const { viewName, addFav, removeFav } = appSlice.actions;
