import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expenses";
const store = configureStore({
  reducer: { expenses: expensesReducer },
});

export default store;
