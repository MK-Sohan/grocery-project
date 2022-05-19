import React, { useEffect, useState } from "react";
import Singleproduct from "../Singleproduct/Singleproduct";
import "./Allproducts.css";
const Allproducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="allproduct-container">
      {products.map((product) => (
        <Singleproduct product={product}></Singleproduct>
      ))}
    </div>
  );
};

export default Allproducts;
