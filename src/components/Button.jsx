import React from "react";

export default function Button({
  children,
  handleClick = () => {},
  type = "default",
}) {
  let additionalClass = "";

  if (type === "delete") {
    additionalClass = "bg-red-600 text-white active:scale-98";
  } else if (type === "info") {
    additionalClass = "bg-blue-600 text-white ";
  }

  return (
    <button
      onClick={handleClick}
      className={`uppercase font-semibold text-sm w-20 h-12 border rounded hover:scale-97 active:scale-98 ${additionalClass}`}
    >
      {children}
    </button>
  );
}
