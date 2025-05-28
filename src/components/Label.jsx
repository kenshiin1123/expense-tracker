export default function Label({ htmlfor, children, onClick = null }) {
  return (
    <label
      htmlFor={htmlfor}
      className="text-lg font-semibold indent-1"
      onClick={onClick}
    >
      {children}
    </label>
  );
}
