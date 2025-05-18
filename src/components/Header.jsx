import { motion } from "motion/react";

export default function Header({ size = "large", children }) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`text-3xl font-semibold`}
    >
      {children}
    </motion.h1>
  );
}
