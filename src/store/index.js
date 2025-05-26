import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./transaction";
import globalReducer from "./global";

const store = configureStore({
  reducer: { transaction: transactionReducer, global: globalReducer },
});

export default store;
