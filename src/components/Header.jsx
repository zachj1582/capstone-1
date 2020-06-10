import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <p>Products</p>
      </Link>
      <h1>Weasleys' Wizard Wheezes</h1>
      <Link to="/cart">
        <p>Cart</p>
      </Link>
    </header>
  );
};

export default Header;
