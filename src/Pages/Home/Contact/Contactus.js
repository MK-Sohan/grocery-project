import React from "react";
import "./Contactus.css";
const Contactus = () => {
  return (
    <section class="contact" id="contact">
      <h1 class="heading">
        <span>contact</span> us
      </h1>

      <form action="">
        <div class="inputBox">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </div>

        <div class="inputBox">
          <input type="number" placeholder="number" />
          <input type="text" placeholder="subject" />
        </div>

        <textarea
          placeholder="message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>

        <input type="submit" value="send message" class="btn" />
      </form>
    </section>
  );
};

export default Contactus;
