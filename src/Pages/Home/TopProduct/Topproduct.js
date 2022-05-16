import React, { useEffect, useState } from "react";
import "./Topproduct.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaShare, FaEye } from "react-icons/fa";
const Topproduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section class="product" id="product">
      <h1 class="heading">
        latest <span>products</span>
      </h1>
      <div className="mycontainer">
        {products.slice(0, 7).map((product) => (
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
              <a href="#" class="btn">
                add to cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topproduct;
