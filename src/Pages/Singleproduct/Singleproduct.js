import React, { useEffect } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaShare, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import "./Singleproduct.css";
const Singleproduct = ({ product }) => {
  console.log(product);
  const handleAddtocart = (p) => {
    const product = {
      name: p.productname,
      price: p.price,
      quantity: p.quantity,
      image: p.image,
    };
    fetch("http://localhost:5000/cart", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast("Item Add to Cart");
        console.log(json);
      });
  };

  return (
    <section class="product" id="product">
      {/* <div className="mycontainer2"> */}
      <div class="box-container">
        <div class="box">
          <span class="discount">-33%</span>
          <div class="icons">
            <a href="#">
              {" "}
              <BsFillSuitHeartFill></BsFillSuitHeartFill>{" "}
            </a>
            <a href="#" class="">
              <FaShare></FaShare>{" "}
            </a>
            <a href="#" class="">
              <FaEye></FaEye>{" "}
            </a>
          </div>
          <img src={product.image} alt="" />
          <h3>{product.productname}</h3>
          <div class="stars">{/* star icon */}</div>
          <div class="price">
            {/* $10.50 <span> $13.20 </span> */}
            {product.price}
          </div>
          <div class="quantity">
            <span>quantity : </span>
            <input type="number" min="1" max="1000" value="1" />
            <span> /kg </span>
          </div>
          <button onClick={() => handleAddtocart(product)} href="#" class="btn">
            add to cart
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Singleproduct;
