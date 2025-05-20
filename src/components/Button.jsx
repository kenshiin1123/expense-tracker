export default function Button({
  children,
  handleClick = () => {},
  type = "default",
  size = "small",
  additionalClass,
}) {
  if (type === "delete") {
    additionalClass += " bg-red-600 text-white active:scale-90";
  } else if (type === "info") {
    additionalClass += " bg-blue-600 text-white ";
  }

  if (size === "small") {
    additionalClass += " w-20";
  } else {
    additionalClass += " w-full";
  }

  return (
    <button
      onClick={handleClick}
      className={`uppercase font-semibold text-sm h-12 border rounded hover:scale-98 active:opacity-80 ${additionalClass}`}
    >
      {children}
    </button>
  );
}
