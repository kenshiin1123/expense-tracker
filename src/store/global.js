import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleDarkmode(state) {
      state.darkmode = !state.darkmode;
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
