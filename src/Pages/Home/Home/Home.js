import React from "react";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
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
    </div>
  );
};

export default Home;
