import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./Layout.jsx";

// Pages
import Dashboard from "./pages/Dashboard.jsx";
import Transactions from "./pages/Transactions.jsx";
import AddTransaction from "./pages/AddTransaction.jsx";
import Settings from "./pages/Settings.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/add", element: <AddTransaction /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
