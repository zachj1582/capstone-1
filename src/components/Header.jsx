import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <p className='links' >Products</p>
      </Link>
      <h1 id='title'>Weasleys' Wizard Wheezes</h1>
      <Link to="/cart">
        <p className='links' >Cart</p>
      </Link>
    </header>
  );
};

export default Header;
