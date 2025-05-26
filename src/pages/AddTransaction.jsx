import Header from "../components/Header";
import Container from "../components/Container";
import Input from "../components/Input";
import Label from "../components/Label";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { transactionActions } from "../store/transaction";
import { v4 as uuid } from "uuid";

export default function AddTransaction() {
  const [transactionType, setTransactionType] = useState("expense");
  const dispatch = useDispatch();

  const amountRef = useRef();
  const typeRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    amountRef.current.focus();
    dateRef.current.value = format(new Date(), "yyyy-MM-dd");
  });

  const handleSubmitTransaction = () => {
    const amount = amountRef.current.value;
    const type = typeRef.current.value;
    const category = categoryRef.current.value;
    const date = format(dateRef.current.value, "PPP");

    if (!amount || !type || !category || !date) {
      return;
    }

    const transaction = {
      amount,
      type,
      category,
      date,
      id: uuid(),
    };

    dispatch(transactionActions.addTransaction(transaction));

    amountRef.current.value = "";
    if (window.innerWidth >= 700) {
      amountRef.current.focus();
    }
  };

  return (
    <>
      <Header>New Transaction</Header>
      <Container
        additionalClasses="mt-5 max-w-[30rem] mt-10 px-5 py-3 max-sm:mx-auto"
        noPadding={true}
      >
        <Section>
          <Label htmlfor={"amount"}>Amount</Label>
          <Input
            ref={amountRef}
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter amount"
          />
        </Section>
        <TypeDropDown ref={typeRef} onTypeChange={setTransactionType} />
        <CategoryDropDown categoryRef={categoryRef} type={transactionType} />
        <Section>
          <Label htmlfor={"date"}>Date</Label>
          <Input
            ref={dateRef}
            id="amount"
            name="amount"
            type="date"
            additionalClass="w-full"
          />
        </Section>
        <Button
          handleClick={handleSubmitTransaction}
          type="info"
          size="wide"
          additionalClass={"mt-4"}
        >
          Add
        </Button>
      </Container>
    </>
  );
}

const Section = ({ children }) => {
  return <section className="flex flex-col my-2 gap-1">{children}</section>;
};

const TypeDropDown = ({ ref, onTypeChange }) => {
  return (
    <Section>
      <Label htmlfor={"type"}>Type</Label>
      <select
        name="type"
        id="type"
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400"
        ref={ref}
        onChange={(e) => onTypeChange(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
    </Section>
  );
};

const CategoryDropDown = ({ categoryRef, type }) => {
  const expenseCategories = [
    "Groceries",
    "Food & Beverages",
    "Transport & Fuel",
    "Utilities",
    "Rent or Mortgage",
    "Healthcare & Insurance",
    "Entertainment & Subscriptions",
    "Personal Care",
    "Education",
    "Gifts & Donations",
    "Travel",
    "Debt Repayment",
    "Pets",
    "Savings Contribution",
    "Miscellaneous",
  ];

  const incomeCategories = [
    "Salary",
    "Freelance & Side Hustles",
    "Investments (Dividends, Stocks)",
    "Business Income",
    "Gifts & Allowance",
    "Scholarships or Grants",
    "Rental Income",
    "Refunds or Reimbursements",
    "Bonuses",
    "Other",
  ];

  const categories = type === "expense" ? expenseCategories : incomeCategories;

  return (
    <Section>
      <Label htmlfor={"category"}>Category</Label>
      <select
        name="category"
        id="category"
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400"
        ref={categoryRef}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </Section>
  );
};
