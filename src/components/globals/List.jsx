export const ListColumn = ({ children, className }) => {
  return (
    <ul className={"flex flex-wrap flex-col list-none " + (className || "")}>
      {children}
    </ul>
  );
};

export const Item = ({ children, className }) => {
  return (
    <li className={"list-item " + (className || "")}>
      {children}
    </li>
  );
};