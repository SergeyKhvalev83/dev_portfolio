"use client";

import { useState } from "react";

const AboutMeSection = () => {
  const [classes, setClasses] = useState("");

  return (
    <section id="about" className={classes}>
      <div className="center">
        <h2> About </h2>
        <p>
        Passionate Full Stack Developer with over 4 years of experience in modern web technologies, specializing in building engaging, user-centric applications. Skilled in JavaScript, TypeScript, React, and Redux, I create seamless, dynamic user experiences. My journey in web development is driven by continuous learning, staying ahead of industry trends, and consistently pushing the boundaries of what is possible on the web.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
