import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transaction";
const store = configureStore({
  reducer: { transaction: transactionReducer },
});

export default store;
