import React from "react";
import "../style/header.css";

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <header className={"header"}>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;