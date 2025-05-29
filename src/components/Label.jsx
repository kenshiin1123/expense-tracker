export default function Label({ htmlfor, children, onClick = null }) {
  return (
    <label
      htmlFor={htmlfor}
      className="text-lg font-semibold indent-1 overflow-ellipsis truncate select-none"
      onClick={onClick}
    >
      {children}
    </label>
  );
}
