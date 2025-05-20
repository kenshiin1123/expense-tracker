import { motion } from "motion/react";
export default function Container({
  additionalClasses,
  children,
  duration = 0.2,
  noPadding = false,
  handleClick = () => {},
  hoverAnimate = false,
}) {
  return (
    <motion.div
      whileHover={
        hoverAnimate && {
          scale: 0.97,
          translateY: -5,
          transition: { scale: { duration: 0.1 } },
        }
      }
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ x: { duration: duration } }}
      className={` ${additionalClasses} rounded-2xl min-h-20   ${
        !noPadding && "py-7 px-5"
      } shadow shadow-gray-400 `}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}
