import Header from "../components/Header";
import StatCard from "../components/StatCard";
import PieChart from "../components/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../store/transaction";
import LineChart from "../components/LineChart";
export default function Dashboard() {
  const dispatch = useDispatch();
  dispatch(transactionActions.calculateExpenses());
  dispatch(transactionActions.calculateIncome());
  dispatch(transactionActions.calculateBalance());
  const totalExpenses = useSelector((state) => state.transaction.totalExpenses);
  const totalIncome = useSelector((state) => state.transaction.totalIncome);
  const balance = useSelector((state) => state.transaction.balance);
  const transactions = useSelector((state) => state.transaction.transactions);
  const currencySymbol = useSelector((state) => state.global.currencySymbol);

  return (
    <>
      <Header additionalClass="mt-5">Dashboard</Header>
      {/* Total Balance */}
      <StatCard
        title={"Total Balance"}
        value={balance}
        type="balance"
        moneySign={currencySymbol}
      />
      <section className="flex justify-between">
        <StatCard
          title={"Total Expenses"}
          value={totalExpenses}
          type="expense"
          size={"medium"}
          moneySign={currencySymbol}
        />
        <StatCard
          title={"Total Income"}
          value={totalIncome}
          type="income"
          size={"medium"}
          moneySign={currencySymbol}
        />
      </section>

      <div className="flex justify-between max-lg:flex-col mt-5 max-lg:gap-5">
        <PieChart transactions={transactions} type={"expense"} />
        <PieChart transactions={transactions} type={"income"} />
      </div>
      <LineChart transactions={transactions} />
    </>
  );
}
