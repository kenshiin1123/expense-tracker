export default function Input({
  ref = undefined,
  additionalClass = "",
  ...props
}) {
  return (
    <input
      ref={ref}
      {...props}
      className={`text-black bg-gray-100 rounded indent-1 p-2 shadow-sm shadow-gray-400 ${additionalClass}`}
    />
  );
}
