import { createSlice } from "@reduxjs/toolkit";

// Helper to safely read from localStorage
const getInitialDarkMode = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("darkmode") === "true";
  }
  return false; // default fallback (light mode)
};

const initialState = {
  darkmode: getInitialDarkMode(),
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDarkmode(state, action) {
      state.darkmode = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("darkmode", action.payload);
      }
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
