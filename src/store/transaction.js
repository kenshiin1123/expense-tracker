import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const seed = [
  {
    type: "income",
    category: "Freelancing",
    amount: "350.00",
    date: "May 17, 2025",
    id: uuid(),
  },
  {
    type: "expense",
    category: "Groceries",
    amount: "48.75",
    date: "May 18, 2025",
    id: uuid(),
  },
  {
    type: "income",
    category: "Salary",
    amount: "2500.00",
    date: "May 15, 2025",
    id: uuid(),
  },
  {
    type: "expense",
    category: "Utilities",
    amount: "120.00",
    date: "May 14, 2025",
    id: uuid(),
  },
  {
    type: "expense",
    category: "Restaurant",
    amount: "65.20",
    date: "May 13, 2025",
    id: uuid(),
  },
  {
    type: "income",
    category: "Stock Dividend",
    amount: "150.00",
    date: "May 12, 2025",
    id: uuid(),
  },
  {
    type: "expense",
    category: "Transport",
    amount: "30.50",
    date: "May 11, 2025",
    id: uuid(),
  },
];

if (!localStorage.getItem("transactions")) {
  localStorage.setItem("transactions", JSON.stringify([]));
}

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")),
  top5Transaction: [],
  totalExpenses: 0,
  totalIncome: 0,
  balance: 0,
};

const sum = (numbers, type) => {
  return numbers.reduce((total, transaction) => {
    if (transaction.type === type) {
      const amount = parseFloat(transaction.amount);
      return total + amount;
    }
    return total;
  }, 0);
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    calculateBalance(state) {
      state.balance = state.totalIncome - state.totalExpenses;
    },
    calculateExpenses(state) {
      state.totalExpenses = sum(state.transactions, "expense");
    },
    calculateIncome(state) {
      state.totalIncome = sum(state.transactions, "income");
    },
    addTransaction(state, action) {
      const localTransactions = JSON.parse(
        localStorage.getItem("transactions")
      );
      localTransactions.unshift(action.payload);
      localStorage.setItem("transactions", JSON.stringify(localTransactions));

      state.transactions.unshift(action.payload);
    },
    editTransaction(state, action) {
      const transaction = action.payload;
      const { id } = transaction;

      // Update localStorage
      const localTransactions =
        JSON.parse(localStorage.getItem("transactions")) || [];
      const updatedLocal = localTransactions.map((t) =>
        t.id === id ? transaction : t
      );
      localStorage.setItem("transactions", JSON.stringify(updatedLocal));

      // Update Redux state
      state.transactions = state.transactions.map((t) =>
        t.id === id ? transaction : t
      );
    },

    removeTransaction(state, action) {
      const id = action.payload;

      // Remove transaction in localStorage
      let fetchedLocalTransactions = JSON.parse(
        localStorage.getItem("transactions")
      );

      const updatedLocalTransactions = fetchedLocalTransactions.filter(
        (transaction) => transaction.id !== id
      );

      localStorage.setItem(
        "transactions",
        JSON.stringify(updatedLocalTransactions)
      );

      // Remove transaction in memory

      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );
    },
    getTransactions(state) {
      return state.transactions;
    },
  },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
