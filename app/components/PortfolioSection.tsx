"use client";

import {} from "react";

const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div className="center">
        <h2>Portfolio</h2>
        <div className="portfolio-container">
          <a href=""   target="_blank">
            <img src="/img/workout_app_logo.jpg" alt="workout_logo" />
          </a> 
          <a href="https://air-bnb-clone-mern-8157ba05deb7.herokuapp.com" target="_blank">
            <img src="/img/air_bnb_clon_logo.jpg" alt="airbnb_logo" />
          </a>
          <a href=""   target="_blank">
            <img src="/img/mackbook3.jpg" alt="" />
          </a>
          <a href="" target="_blank">
            <img src="/img/mackbook4.jpg" alt="" />
          </a>
          <a href="" target="_blank">
            <img src="/img/mackbook.jpg" alt="" />
          </a>
          <a href="" target="_blank">
            <img src="/img/mackbook2.jpg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
