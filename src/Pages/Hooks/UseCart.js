import React, { useEffect, useState } from "react";

const UseCart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, [carts]);
  return [carts, setCarts];
};

export default UseCart;
