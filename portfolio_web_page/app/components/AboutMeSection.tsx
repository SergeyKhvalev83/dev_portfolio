"use client";

import { useState } from "react";

const AboutMeSection = () => {
  const [classes, setClasses] = useState("");

  return (
    <section id="about" className={classes}>
      <div className="center">
        <h2> About </h2>{" "}
        <p>
          I have been involved in front-end development for over three years,
          specializing in React.js and TypeScript. I have participated in
          developing applications from scratch, setting up Webpack. I mainly use
          the React, Redux-Toolkit, and TypeScript stack, and for testing, I use
          Jest and react-testing-library, adhering to the FSD architecture.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
