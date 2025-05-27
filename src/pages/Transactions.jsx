import { Link } from "react-router";
import Container from "../components/Container";
import Header from "../components/Header";
import TransactionCard from "../components/TransactionCard";
import { useSelector } from "react-redux";
import Button from "../components/Button";

export default function Transactions() {
  const transactions = useSelector((state) => state.transaction.transactions);
  return (
    <>
      <Header>Transaction History</Header>
      <div className="grid gap-3 max-sm:grid-cols-1 min-sm:grid-cols-1 mt-10">
        {transactions.length > 0 ? (
          transactions.map((t, i) => (
            <TransactionCard
              key={t.id}
              amount={t.amount}
              category={t.category}
              date={t.date}
              type={t.type}
              id={t.id}
              duration={i * 0.08}
            />
          ))
        ) : (
          <Container additionalClasses={"min-sm:w-80"}>
            <Header size="medium" additionalClass="text-red-600 text-center">
              No transactions available!
            </Header>
            <Link to={"/add"}>
              <Button size="wide" additionalClass={"mt-10"} type="info">
                Add Transaction
              </Button>
            </Link>
          </Container>
        )}
      </div>
    </>
  );
}
