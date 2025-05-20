import React from "react";

export default function Label({ htmlfor, children }) {
  return (
    <label htmlFor={htmlfor} className="text-lg font-semibold indent-1">
      {children}
    </label>
  );
}
