import React from "react";
import "./Heades.css";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accesstoken");
  };

  return (
    <header>
      <div class="header-1">
        <Link to="/" class="logo">
          <FaShoppingBasket className="shopping-busket"></FaShoppingBasket>{" "}
          Groco
        </Link>

        <form action="" class="search-box-container">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" class="fas fa-search"></label>
        </form>
      </div>

      <div class="header-2">
        <div id="menu-bar" class="fas fa-bars"></div>

        <nav class="navbar">
          <Link to="/">home</Link>
          <Link to="/">category</Link>
          <Link to="/products">products</Link>
          <Link to="/cart">cart</Link>
          <Link to="/">contact</Link>
          {user ? (
            <button onClick={logout} className="logout">
              Log out
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>

        <div class="icons">
          <a href="#" class="fas fa-shopping-cart"></a>
          <a href="#" class="fas fa-heart"></a>
          <a href="#" class="fas fa-user-circle"></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
