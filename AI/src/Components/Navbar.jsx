import React from "react";
import SearchIcon from "../assets/search.png";
import AccountIcon from "../assets/acc.png";
import CartIcon from "../assets/cart.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Search Bar */}
      <div className="navbar-section searchbar">
        <img src={SearchIcon} alt="Search" className="icon" />
        <h3>Search....</h3>
      </div>

      {/* Logo */}
      <div className="navbar-section logo">
        <h1 className="brand-name">TRYLY</h1>
      </div>

      {/* Account & Cart */}
      <div className="navbar-section account-cart">
        <div className="account">
          <img src={AccountIcon} alt="Account" className="icon" />
          <h3>Account</h3>
        </div>
        <div className="cart">
          <img src={CartIcon} alt="Cart" className="icon" />
          <h3>Cart</h3>
        </div>
      </div>
    </header>
  );
}

export default Navbar;