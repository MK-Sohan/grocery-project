import React from "react";
import { Link } from "react-router-dom";
import UseCart from "../Hooks/UseCart";
import "./Cartitem.css";
const CartItem = ({ cart }) => {
  //   console.log(cart._id);
  const [carts, setCarts] = UseCart();
  console.log(carts);
  const handleDeleteitem = (id) => {
    const agree = window.confirm("Are You Shure?");
    console.log(id);
    if (agree) {
      fetch(`http://localhost:5000/cart/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          //   const remaining = carts.filter((cart) => cart._id !== id);
          setCarts(data);
        });
    }
  };

  return (
    <div className="CartItemCard">
      <img src={cart.image} alt="ssa" />
      <div>
        {/* <Link to={`/product/${cart.product}`}>{cart.productname}</Link> */}
        <span> {cart.productname}</span>
        <span>Price:{cart.price}</span>
        <button onClick={() => handleDeleteitem(cart._id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
