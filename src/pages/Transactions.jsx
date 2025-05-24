import Header from "../components/Header";
import TransactionCard from "../components/TransactionCard";
import { useSelector } from "react-redux";

export default function Transactions() {
  const transactions = useSelector((state) => state.transaction.transactions);
  return (
    <>
      <Header>Transactions History</Header>
      <div className="grid gap-3 max-sm:grid-cols-1 min-sm:grid-cols-1 mt-10">
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
