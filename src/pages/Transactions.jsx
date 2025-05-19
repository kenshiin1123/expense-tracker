import Header from "../components/Header";
import TransactionCard from "../components/TransactionCard";

const transactions = [
  {
    type: "income",
    category: "Freelance Project",
    amount: "350.00",
    date: "May 17, 2025",
  },
  {
    type: "expenses",
    category: "Groceries",
    amount: "48.75",
    date: "May 18, 2025",
  },
  {
    type: "income",
    category: "Salary",
    amount: "2,500.00",
    date: "May 15, 2025",
  },
  {
    type: "expenses",
    category: "Utilities",
    amount: "120.00",
    date: "May 14, 2025",
  },
  {
    type: "expenses",
    category: "Restaurant",
    amount: "65.20",
    date: "May 13, 2025",
  },
  {
    type: "income",
    category: "Stock Dividend",
    amount: "150.00",
    date: "May 12, 2025",
  },
  {
    type: "expenses",
    category: "Transport",
    amount: "30.50",
    date: "May 11, 2025",
  },
];

export default function Transactions() {
  return (
    <>
      <Header>Transactions History</Header>
      <div className="flex flex-wrap mt-10 gap-5">
        {transactions.map((t, i) => (
          <TransactionCard
            key={i}
            amount={t.amount}
            category={t.category}
            date={t.date}
            type={t.type}
            duration={i * 0.08}
          />
        ))}
      </div>
    </>
  );
}
