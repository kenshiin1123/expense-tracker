import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const seed = [
  {
    type: "income",
    category: "Freelance Project",
    amount: "350.00",
    date: "May 17, 2025",
    id: uuid(),
  },
  {
    type: "expenses",
    category: "Groceries",
    amount: "48.75",
    date: "May 18, 2025",
    id: uuid(),
  },
  {
    type: "income",
    category: "Salary",
    amount: "2,500.00",
    date: "May 15, 2025",
    id: uuid(),
  },
  {
    type: "expenses",
    category: "Utilities",
    amount: "120.00",
    date: "May 14, 2025",
    id: uuid(),
  },
  {
    type: "expenses",
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
    type: "expenses",
    category: "Transport",
    amount: "30.50",
    date: "May 11, 2025",
    id: uuid(),
  },
];

const initialState = {
  transactions: [],
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
      state.totalExpenses = sum(state.transactions, "expenses");
    },
    calculateIncome(state) {
      state.totalIncome = sum(state.transactions, "income");
    },
    addTransaction(state, payload) {
      state.transactions.unshift(payload.payload);
    },
    removeTransaction(state, payload) {
      const id = payload.id;
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== id
      );
    },
  },
});

export const transactionActions = transactionSlice.actions;

export default transactionSlice.reducer;
