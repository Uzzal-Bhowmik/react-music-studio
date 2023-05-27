import React from "react";
import "./Header.css";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div className="logo text-center animate__animated animate__bounceInDown animate__slow">
      <img src={logo} alt="logo" />
      <p className="tagline">
        <small className="text-muted">Learn Music With Passion ❤️</small>
      </p>

    </div>
  );
};

export default Header;
