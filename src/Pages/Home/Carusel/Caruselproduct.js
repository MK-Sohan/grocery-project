import React, { useEffect, useState } from "react";
import "./Carusel.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaShare, FaEye } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Caruselproduct = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    // speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main-container">
      <h1 class="heading">
        Top <span>products</span>
      </h1>
      <Slider {...settings}>
        {products.slice(0, 10).map((product) => (
          <div class="caru-container">
            <div class="caru-box">
              <img src={product.image} alt="" />
              <h3>{product.productname}</h3>

              {/* <div class="caru-quantity">
                <span>quantity : </span>
                <input type="number" min="1" max="1000" value="1" />
                <span> /kg </span>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Caruselproduct;
