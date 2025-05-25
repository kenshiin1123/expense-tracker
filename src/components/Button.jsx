export default function Button({
  children,
  handleClick = () => {},
  type = "outlined",
  size = "small",
  additionalClass,
  enableHover = true,
}) {
  if (type === "delete") {
    additionalClass += " bg-red-500 text-white";
  } else if (type === "info") {
    additionalClass += " bg-blue-500 text-white ";
  } else if (type === "outlined") {
    additionalClass +=
      " bg-blue-white border border-gray-400 bg-gray-100 text-gray-900 ";
  }

  if (size === "small") {
    additionalClass += " w-20";
  } else {
    additionalClass += " w-full";
  }

  return (
    <button
      onClick={handleClick}
      className={`uppercase font-semibold text-sm h-12 rounded active:opacity-80 transition ${
        enableHover && "hover:scale-97"
      } ${additionalClass}`}
    >
      {children}
    </button>
  );
}
