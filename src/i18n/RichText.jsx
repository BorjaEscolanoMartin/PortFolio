// Highlight styles used inside the rich text of the dictionaries.
export function Hl({ children }) {
  return <span className="text-lime-400">{children}</span>;
}

export function Strong({ children }) {
  return <span className="text-white font-semibold">{children}</span>;
}
