import { motion } from "motion/react";
import { useSelector } from "react-redux";
export default function Container({
  additionalClasses,
  children,
  duration = 0.2,
  noPadding = false,
  handleClick = () => {},
  hoverAnimate = false,
}) {
  const darkmode = useSelector((state) => state.global.darkmode);

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
      className={` ${additionalClasses} rounded-2xl min-h-20 ${
        darkmode && "bg-gray-900/30 text-white"
      } text-black  ${!noPadding && "py-7 px-5"} ${
        darkmode ? "border border-gray-800" : "shadow shadow-gray-400"
      } `}
      onClick={handleClick}
    >
      {children}
    </motion.div>
  );
}
