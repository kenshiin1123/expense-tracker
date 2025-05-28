import { motion } from "motion/react";

// Icons
import { MdOutlineSpaceDashboard } from "react-icons/md"; // Dashboard icon
import { TiThMenuOutline } from "react-icons/ti"; // Transactions icon
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const navigations = [
  { path: "/", name: "Dashboard", icon: <MdOutlineSpaceDashboard /> },
  { path: "/add", name: "Add Transaction", icon: <IoIosAddCircleOutline /> },
  { path: "/transactions", name: "Transactions", icon: <TiThMenuOutline /> },
  { path: "/settings", name: "Settings", icon: <IoMdSettings /> },
];

export default function NavigationBar() {
  const darkmode = useSelector((state) => state.global.darkmode);

  const [isSmall, setIsSmall] = useState(window.innerWidth < 640);

  useEffect(() => {
    const resizeEvent = addEventListener("resize", () => {
      if (window.innerWidth < 640) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
      return () => {
        removeEventListener(resizeEvent);
      };
    });
  });

  return (
    <>
      {!isSmall ? (
        // Large Width
        <div
          className={`${
            darkmode
              ? "bg-gray-900/30 border-r border-r-gray-900"
              : "bg-[#e9f1ef]"
          }  h-full max-sm:hidden min-sm:fixed w-64 lg:w-72"`}
        >
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
      ) : (
        // Small Width
        <div
          className={`fixed bottom-0 ${
            darkmode ? "bg-black" : "bg-white"
          } z-20 w-full flex justify-center h-20 `}
        >
          <ul className="py-5 flex px-3 gap-1 nth-of-type-[2]:order-3">
            {navigations.map((navigation) => {
              return (
                <CustomNavLink
                  key={navigation.name}
                  path={navigation.path}
                  name={navigation.name}
                  icon={navigation.icon}
                  darkmode={darkmode}
                />
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}

const CustomNavLink = ({ path, name, icon, darkmode }) => {
  const currentPath = useLocation().pathname;

  let additionalClass = "";

  if (currentPath === path) {
    additionalClass =
      "text-black max-sm:bg-black max-sm:text-white min-sm:bg-white";
    if (darkmode) {
      additionalClass = "max-sm:bg-white max-sm:text-black min-sm:text-black";
    }
  }

  return (
    <motion.li>
      <Link
        draggable={false}
        to={path}
        className={`h-full w-full flex items-center px-5 gap-3 py-2 rounded-2xl ${additionalClass}`}
      >
        <span className={`max-sm:text-2xl min-sm:text-lg`}>{icon}</span>
        <p className="text-md max-sm:hidden">{name}</p>
      </Link>
    </motion.li>
  );
};
