import Header from "../components/Header";
import Container from "../components/Container";
import Input from "../components/Input";
import Label from "../components/Label";
import { useEffect, useRef } from "react";
import Button from "../components/Button";
export default function AddTransaction() {
  const amountInputRef = useRef();

  useEffect(() => {
    amountInputRef.current.focus();
  });

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
            ref={amountInputRef}
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter amount"
          />
        </Section>
        <TypeDropDown />
        <CategoryDropDown />
        <Section>
          <Label htmlfor={"date"}>Date</Label>
          <Input id="amount" name="amount" type="date" />
        </Section>
        <Button type="info" size="wide" additionalClass={"mt-4"}>
          Add
        </Button>
      </Container>
    </>
  );
}

const Section = ({ children }) => {
  return <section className="flex flex-col my-2 gap-1">{children}</section>;
};

const TypeDropDown = () => {
  return (
    <Section>
      <Label htmlfor={"type"}>Type</Label>
      <select
        name="type"
        id="type"
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400"
      >
        <option value="">Expense</option>
        <option value="">Income</option>
      </select>
    </Section>
  );
};

const CategoryDropDown = () => {
  return (
    <Section>
      <Label htmlfor={"category"}>Category</Label>
      <select
        name="category"
        id="category"
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400"
      >
        <option value="">School</option>
        <option value="">Groceries</option>
      </select>
    </Section>
  );
};
