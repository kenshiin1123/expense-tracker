import { motion } from "motion/react";

export default function Header({
  size = "large",
  additionalClass = "",
  children,
}) {
  let classes = "";

  switch (size) {
    case "small":
      classes = "text-md font-medium text-gray-800";
      break;
    case "medium":
      classes = "text-xl font-medium text-gray-800";
      break;
    case "large":
      classes = "text-3xl font-bold";
      break;
    case "extra-large":
      classes = "text-4xl font-bold";
      break;
    default:
      classes = "text-xl font-bold";
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
