import { motion } from "motion/react";

// Icons
import { MdOutlineSpaceDashboard } from "react-icons/md"; // Dashboard icon
import { TiThMenuOutline } from "react-icons/ti"; // Transactions icon
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { BiCategory } from "react-icons/bi"; // Category

import { Link, useLocation } from "react-router";

const navigations = [
  { path: "/", name: "Dashboard", icon: <MdOutlineSpaceDashboard /> },
  { path: "/add", name: "Add Transaction", icon: <IoIosAddCircleOutline /> },
  { path: "/transactions", name: "Transactions", icon: <TiThMenuOutline /> },
  { path: "/categories", name: "Categories", icon: <BiCategory /> },
  { path: "/settings", name: "Settings", icon: <IoMdSettings /> },
];

export default function NavigationBar() {
  return (
    <div className="bg-[#e9f1ef] w-60 h-full">
      <h1 className="text-xl text-center mt-10 font-semibold">
        Expense Tracker
      </h1>
      <ul className="py-5 flex flex-col px-3 gap-1">
        {navigations.map((navigation) => {
          return (
            <CustomNavLink
              key={navigation.name}
              path={navigation.path}
              name={navigation.name}
              icon={navigation.icon}
            />
          );
        })}
      </ul>
    </div>
  );
}

const CustomNavLink = ({ path, name, icon }) => {
  const currentPath = useLocation().pathname;
  return (
    <motion.li>
      <Link
        draggable={false}
        to={path}
        className={`h-full w-full flex items-center  px-5 gap-3 py-2 rounded-2xl  ${
          currentPath === path && "bg-white"
        }`}
      >
        <span className={`text-md`}>{icon}</span>
        <p className="text-md">{name}</p>
      </Link>
    </motion.li>
  );
};
