import Header from "../components/Header";
import StatCard from "../components/StatCard";
import PieChart from "../components/PieChart";
export default function Dashboard() {
  return (
    <>
      <Header>Dashoard</Header>
      {/* Total Balance */}
      <StatCard title={"Total Balance"} value={"160.00"} type="balance" />
      <section className="flex justify-between">
        <StatCard title={"Total Income"} value={"160.00"} type="income" />
        <StatCard title={"Total Expenses"} value={"160.00"} type="expenses" />
      </section>
      <PieChart />
    </>
  );
}
