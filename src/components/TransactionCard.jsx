import { useState } from "react";
import Container from "./Container";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import { transactionActions } from "../store/transaction";

import Button from "./Button";
import { useDispatch } from "react-redux";

export default function TransactionCard({
  moneyCurrency = "$",
  type,
  category,
  date,
  amount,
  duration,
  id,
}) {
  let title = "Expenses";
  let bg = "bg-red-600";
  let icon = <IoArrowDownOutline className="text-4xl " />;
  if (type === "expenses") {
    title = "Expenses";
  } else if (type === "income") {
    title = "Income";
    bg = "bg-blue-600";
    icon = <IoArrowUpOutline className="text-4xl " />;
  }

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };

  return (
    <Container
      additionalClasses={`flex items-center h-30 cursor-pointer select-none active:scale-99 relative max-w-[40rem]`}
      duration={duration}
      noPadding={isActive}
      handleClick={toggleActive}
      hoverAnimate={true}
    >
      <IconContainer bg={bg}>{icon}</IconContainer>
      <div className="space-y-1">
        {/* Title */}
        <h1 className="text-xl ml-4 font-semibold text-gray-900">{title}</h1>
        {/* Category */}
        <h1 className="text-md ml-4 font-semibold text-gray-600 ">
          {category}
        </h1>
        {/* Date */}
        <h1 className="text-sm ml-4 font-semibold text-gray-600 ">{date}</h1>
      </div>
      <h1
        className={`text-xl font-semibold ${
          type === "expenses" ? "text-red-600" : "text-green-600"
        } ml-auto`}
      >
        {type === "expenses" && "-"}
        {moneyCurrency}
        {amount}
      </h1>
      {/*  */}
      <SettingsOption isActive={isActive} id={id} />
    </Container>
  );
}

const IconContainer = ({ children, bg }) => {
  return (
    <div
      className={`flex items-center border p-2 rounded-full aspect-square text-white m-0 ${bg}`}
    >
      {children}
    </div>
  );
};

const SettingsOption = ({ isActive, id }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    alert("Editing");
  };
  const handleDelete = () => {
    dispatch(transactionActions.removeTransaction(id));
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={isActive}
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.3, opacity: 0 }}
          className="w-full bg-white absolute h-full rounded-2xl flex justify-center items-center gap-5 "
        >
          {/* <Button handleClick={handleEdit} type="info">
            Edit
          </Button> */}
          <Button handleClick={handleDelete} type="delete">
            Delete
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
