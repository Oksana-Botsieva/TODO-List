import React from "react";
import "../style/header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={"header"}>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;