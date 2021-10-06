import { Link } from "react-router-dom";

const Button = ({ className, children, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export const Button3E = ({ className, children, as, to, onClick }) => {
  children = children ? children : [];
  const _start = children[0] || null;
  const _mid = children[1] || null;
  const _end = children[2] || null;
  const Component = as && as.toLowerCase() === "link" ? Link : Button;

  return (
    <Component to={to || ""} onClick={onClick} 
    className={"flex items-center " + (_end ? "justify-between" : "justify-center") + " " + (className || "")}>
      <div className="flex items-center">
        {_start}
        <div className="flex justify-center pl-2">
          {_mid}
        </div>
      </div>
      <div className="flex justify-center items-center">
        {_end}
      </div>
    </Component>
  );
};