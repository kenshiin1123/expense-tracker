import Header from "./Header";
import Container from "./Container";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { format, parse } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../store/transaction";
import { v4 as uuid } from "uuid";
import { toast } from "sonner";

export default function TransactionForm({
  formType = "add",
  initialData = {
    amount: null,
    type: "expense",
    category: "Groceries",
    date: format(new Date(), "yyyy-MM-dd"),
    id: null,
  },
  submitOrCancelFunc = null,
}) {
  const darkmode = useSelector((state) => state.global.darkmode);

  const [transactionType, setTransactionType] = useState(
    formType === "add" ? "expense" : initialData.type
  );

  const dispatch = useDispatch();

  const amountRef = useRef();
  const typeRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    const parsedDate =
      formType === "add"
        ? initialData.date // already in "yyyy-MM-dd"
        : format(parse(initialData.date, "PP", new Date()), "yyyy-MM-dd");

    amountRef.current.focus();
    amountRef.current.value = initialData.amount;
    typeRef.current.value = initialData.type;
    categoryRef.current.value = initialData.category;
    dateRef.current.value = parsedDate;
  }, [
    formType,
    initialData.amount,
    initialData.type,
    initialData.category,
    initialData.date,
  ]);

  const handleSubmitTransaction = () => {
    const amount = amountRef.current.value;
    const type = typeRef.current.value;
    const category = categoryRef.current.value;
    const date = format(dateRef.current.value, "PP");

    if (!amount || !type || !category || !date) {
      toast.error("Transaction Failed", {
        description:
          "Please fill these required fields: amount, type, category, and date",
      });
      return;
    }

    const transaction = {
      amount,
      type,
      category,
      date,
      id: formType === "add" ? uuid() : initialData.id,
    };

    if (formType === "add") {
      dispatch(transactionActions.addTransaction(transaction));
      toast.success("New transaction created!", {
        description: "Your transaction has been added successfully.",
        action: {
          label: "Confirm",
        },
      });
      amountRef.current.value = "";
    } else if (formType === "edit") {
      toast.success("Transaction updated successfully!", {
        description: "Your changes have been saved.",
        action: {
          label: "Confirm",
        },
      });
      submitOrCancelFunc("edit", transaction);
    }

    if (window.innerWidth >= 700) {
      amountRef.current.focus();
    }
  };

  return (
    <div
      className={`${formType === "edit" && "fixed top-1  pt-4 w-full h-full"} ${
        darkmode ? "bg-black" : "bg-white"
      }`}
    >
      {formType === "add" && <Header>New Transaction</Header>}
      <Container
        additionalClasses={`mt-5 max-sm:max-w-[23rem] min-sm:max-w-[30rem] mt-10 px-5 py-3 max-sm:mx-auto bg-none`}
        noPadding={true}
      >
        {formType === "edit" && (
          <Header size="large" additionalClass="text-center my-5">
            Edit Transaction
          </Header>
        )}
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
        {formType === "add" ? (
          <Button
            handleClick={handleSubmitTransaction}
            type="info"
            size="wide"
            additionalClass={"mt-4"}
          >
            Add
          </Button>
        ) : (
          <div className="flex justify-around mt-5">
            <Button
              type="delete"
              handleClick={() => submitOrCancelFunc("cancel")}
            >
              Cancel
            </Button>
            <Button type="info" handleClick={handleSubmitTransaction}>
              Confirm
            </Button>
          </div>
        )}
      </Container>
    </div>
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
        className="bg-gray-100 rounded p-2 shadow-sm shadow-gray-400 text-black"
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
        className={`bg-gray-100 rounded p-2 shadow-sm shadow-gray-400 text-black`}
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
