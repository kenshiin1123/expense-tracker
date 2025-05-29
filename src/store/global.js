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
const getInitialCurrencySymbol = () => {
  const value = localStorage.getItem("currencySymbol");
  if (value === null) {
    localStorage.setItem("currencySymbol", "$");
    return "$";
  }
  return value;
};

const initialState = {
  darkmode: getInitialDarkMode(),
  enableToast: getInitialEnableToast(),
  currencySymbol: getInitialCurrencySymbol(),
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDarkmode(state, action) {
      state.darkmode = action.payload;
      toast.success(`Darkmode ${state.darkmode ? "Enabled" : "Disabled"}`);
      localStorage.setItem("darkmode", action.payload);
    },
    setToast(state, action) {
      state.enableToast = action.payload;
      toast.success(`Toast ${state.enableToast ? "Enabled" : "Disabled"}`);
      localStorage.setItem("enableToast", action.payload);
    },
    setCurrencySymbol(state, action) {
      const payload = action.payload;
      state.currencySymbol = payload;
      console.log(payload);
      localStorage.setItem("currencySymbol", payload);
      toast.success(`Currency Symbol is set to "${payload}"`);
    },
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
