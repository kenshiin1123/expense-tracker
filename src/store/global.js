import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

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
        toast.info(`Darkmode ${state.darkmode ? "Enabled" : "Disabled"}`);
        localStorage.setItem("darkmode", action.payload);
      }
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
