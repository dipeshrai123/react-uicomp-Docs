import React from "react";
import Logo from "../../../assets/icons/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <nav className="header__wrapper">
        <img src={Logo} alt="React UI Comp Logo" />
        <h2 className="header__title">
          React UI Comp <span style={{ fontSize: 14 }}>v1.x</span>
        </h2>
      </nav>
    </div>
  );
};

export default Header;