import { motion } from "framer-motion";

export default function ToggleButton({ ref, active, toggler }) {
  return (
    <motion.button
      ref={ref}
      className="w-20 h-10 bg-white rounded-full shadow flex items-center border border-gray-500 p-1"
      onClick={toggler}
    >
      <motion.div
        className="rounded-full bg-black size-8 text-white flex justify-center items-center text-sm"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ marginLeft: active ? "auto" : 0 }}
      />
    </motion.button>
  );
}
