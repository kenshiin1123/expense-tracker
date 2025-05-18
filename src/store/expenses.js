import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpenses() {},
    removeExpenses() {},
    editExpenses() {},
  },
});

export const expensesActions = expensesSlice.actions;

export default expensesSlice.reducer;
