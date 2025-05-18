export default function Container({ additionalClasses, children }) {
  return (
    <div
      className={`border border-gray-400 rounded-2xl min-h-20 ${additionalClasses} py-7 px-5`}
    >
      {children}
    </div>
  );
}
