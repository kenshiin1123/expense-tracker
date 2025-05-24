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
  return (
    <>
      <Header>Dashoard</Header>
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
          type="expenses"
          size={"medium"}
        />
      </section>
      <PieChart />
    </>
  );
}
