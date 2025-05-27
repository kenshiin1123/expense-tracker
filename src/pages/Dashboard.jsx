import Header from "../components/Header";
import StatCard from "../components/StatCard";
import PieChart from "../components/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../store/transaction";
export default function Dashboard() {
  const dispatch = useDispatch();
  dispatch(transactionActions.calculateExpenses());
  dispatch(transactionActions.calculateIncome());
  dispatch(transactionActions.calculateBalance());
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);
  const totalIncome = useSelector((state) => state.transaction.totalIncome);
  const balance = useSelector((state) => state.transaction.balance);
  const transactions = useSelector((state) => state.transaction.transactions);

  return (
    <>
      {window.innerWidth < 640 && <Header>Dashboard</Header>}
      {/* Total Balance */}
      <StatCard title={"Total Balance"} value={balance} type="balance" />
      <section className="flex justify-between">
        <StatCard
          title={"Total Income"}
          value={totalIncome}
          type="income"
          size={"medium"}
        />
        <StatCard
          title={"Total Expenses"}
          value={totalExpenses}
          type="expense"
          size={"medium"}
        />
      </section>
      <div className="flex justify-between max-lg:flex-col mt-5 max-lg:gap-5">
        {totalExpenses > 0 && (
          <PieChart transactions={transactions} type={"expense"} />
        )}
        {totalIncome > 0 && (
          <PieChart transactions={transactions} type={"income"} />
        )}
      </div>
    </>
  );
}
