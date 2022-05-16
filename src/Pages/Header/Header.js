import React from "react";
import "./Heades.css";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div class="header-1">
        <a href="#" class="logo">
          <FaShoppingBasket className="shopping-busket"></FaShoppingBasket>{" "}
          Groco
        </a>

        <form action="" class="search-box-container">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" class="fas fa-search"></label>
        </form>
      </div>

      <div class="header-2">
        <div id="menu-bar" class="fas fa-bars"></div>

        <nav class="navbar">
          <a href="#home">home</a>
          <a href="#category">category</a>
          <a href="#product">product</a>
          <a href="#deal">deal</a>
          <a href="#contact">contact</a>
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
