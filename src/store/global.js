import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

// Helper to safely read from localStorage
const getInitialDarkMode = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("darkmode") === "true";
  }
  return false; // default fallback (light mode)
};

const getInitialEnableToast = () => {
  const value = localStorage.getItem("enableToast");
  if (value === null) {
    localStorage.setItem("enableToast", "true");
    return true;
  }
  return value === "true";
};

const initialState = {
  darkmode: getInitialDarkMode(),
  enableToast: getInitialEnableToast(),
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDarkmode(state, action) {
      state.darkmode = action.payload;
      toast.info(`Darkmode ${state.darkmode ? "Enabled" : "Disabled"}`);
      localStorage.setItem("darkmode", action.payload);
    },
    setToast(state, action) {
      state.enableToast = action.payload;
      toast.info(`Toast ${state.enableToast ? "Enabled" : "Disabled"}`);
      localStorage.setItem("enableToast", action.payload);
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
