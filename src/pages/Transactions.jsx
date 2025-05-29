import { Link } from "react-router";
import Container from "../components/Container";
import Header from "../components/Header";
import TransactionCard from "../components/TransactionCard";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { useState } from "react";
import TransactionForm from "../components/TransactionForm";
import { transactionActions } from "../store/transaction";
export default function Transactions() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);
  const currencySymbol = useSelector((state) => state.global.currencySymbol);

  const [showForm, setShowForm] = useState(false);
  const [formValue, setFormValue] = useState({
    amount: null,
    type: "expense",
    category: "Groceries",
    date: "May 23, 2025",
    id: null,
  });

  const showFormFunc = (transaction) => {
    setShowForm(true);
    setFormValue(transaction);
  };

  const submitOrCancelFunc = (type = "cancel", transaction = null) => {
    if (type === "cancel") {
      setShowForm(false);
    } else {
      setShowForm(false);
      dispatch(transactionActions.editTransaction(transaction));
    }
  };

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
              showForm={showFormFunc}
              moneyCurrency={currencySymbol}
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
      {showForm && (
        <TransactionForm
          formType="edit"
          initialData={formValue}
          submitOrCancelFunc={submitOrCancelFunc}
        />
      )}
    </>
  );
}
