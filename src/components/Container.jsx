import { motion } from "motion/react";
export default function Container({ additionalClasses, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className={` ${additionalClasses} rounded-2xl min-h-20 py-7 px-5 shadow shadow-gray-400 `}
    >
      {children}
    </motion.div>
  );
}
