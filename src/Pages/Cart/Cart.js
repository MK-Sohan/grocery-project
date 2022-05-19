import React, { useEffect, useState } from "react";
import UseCart from "../Hooks/UseCart";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = () => {
  const [carts, setCarts] = UseCart();

  return (
    <div className="carts-container">
      {carts.map((cart) => (
        <CartItem key={cart._id} cart={cart}></CartItem>
      ))}
    </div>
  );
};

export default Cart;
