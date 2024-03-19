import { memo } from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h2>오늘은😎</h2>
      <p>{new Date().toDateString()}</p>
    </div>
  );
};

const memoizedHeader = memo(Header);

export default memoizedHeader;
