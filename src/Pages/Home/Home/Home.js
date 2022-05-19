import React from "react";
import Banner from "../Banner/Banner";
import Caruselproduct from "../Carusel/Caruselproduct";
import Catagory from "../Catagory/Catagory";
import Contactus from "../Contact/Contactus";
import BestDeal from "../Deal/BestDeal";
import Subscribe from "../Subscribe/Subscribe";
import Topproduct from "../TopProduct/Topproduct";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="image">
          <img src="https://i.ibb.co/C9ctsHJ/home-img.png" alt="" />
        </div>

        <div class="content">
          <span>fresh and organic</span>
          <h3>your daily need products</h3>
          <a href="#" class="btn">
            get started
          </a>
        </div>
      </section>

      <Banner></Banner>
      <Catagory></Catagory>
      <Topproduct></Topproduct>
      <Caruselproduct></Caruselproduct>
      <BestDeal></BestDeal>
      <Contactus></Contactus>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
