import { motion } from "motion/react";
import { useSelector } from "react-redux";

export default function Header({
  size = "extra-large",
  additionalClass = "",
  children,
}) {
  const darkmode = useSelector((state) => state.global.darkmode);
  let classes = "";

  switch (size) {
    case "small":
      classes = `text-md font-medium`;
      break;
    case "medium":
      classes = `max-sm:text-md min-sm:text-xl font-medium`;
      break;
    case "large":
      classes = `text-2xl font-bold`;
      break;
    case "extra-large":
      classes = `max-sm:text-3xl max-sm:text-center  text-4xl font-bold`;
      break;
    default:
      classes = `text-xl font-bold`;
      break;
  }

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${classes} ${additionalClass}`}
    >
      {children}
    </motion.h1>
  );
}
