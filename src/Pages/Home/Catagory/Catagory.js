import React from "react";
import "./Catagory.css";
const Catagory = () => {
  return (
    <section class="category" id="category">
      <h1 class="heading">
        shop by <span>category</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <h3>vegitables</h3>
          <p>upto 50% off</p>
          <img src="https://i.ibb.co/ZTVGbJj/cat-1.webp" alt="" />
          <a href="#" class="btn">
            shop now
          </a>
        </div>
        <div class="box">
          <h3>juice</h3>
          <p>upto 44% off</p>
          <img src="https://i.ibb.co/L0ZfBM5/cat-3.webp" alt="" />
          <a href="#" class="btn">
            shop now
          </a>
        </div>
        <div class="box">
          <h3>meat</h3>
          <p>upto 35% off</p>
          <img src="https://i.ibb.co/563FgtN/cat-4.webp" alt="" />
          <a href="#" class="btn">
            shop now
          </a>
        </div>
        <div class="box">
          <h3>fruite</h3>
          <p>upto 12% off</p>
          <img src="https://i.ibb.co/fGDh26V/cat-2.webp" alt="" />
          <a href="#" class="btn">
            shop now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catagory;
