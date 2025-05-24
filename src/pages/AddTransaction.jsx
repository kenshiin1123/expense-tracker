import Header from "../components/Header";
import Container from "../components/Container";
import Input from "../components/Input";
import Label from "../components/Label";
import { useEffect, useRef } from "react";
import Button from "../components/Button";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../store/transaction";
import { v4 as uuid } from "uuid";

export default function AddTransaction() {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transaction.transactions);

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
    console.log(transactions);

    amountRef.current.value = "";
    amountRef.current.focus();
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
        <TypeDropDown ref={typeRef} />
        <CategoryDropDown ref={categoryRef} />
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

const TypeDropDown = ({ ref }) => {
  return (
    <Section>
      <Label htmlfor={"type"}>Type</Label>
      <select
        name="type"
        id="type"
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400"
        ref={ref}
      >
        <option value="expenses">Expenses</option>
        <option value="income">Income</option>
      </select>
    </Section>
  );
};

const CategoryDropDown = ({ ref }) => {
  return (
    <Section>
      <Label htmlfor={"category"}>Category</Label>
      <select
        name="category"
        id="category"
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400"
        ref={ref}
      >
        <option value="School">School</option>
        <option value="Groceries">Groceries</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Shopping">Shopping</option>
        <option value="Salary">Salary</option>
        <option value="Investment">Investment</option>
        <option value="Other">Other</option>
      </select>
    </Section>
  );
};
