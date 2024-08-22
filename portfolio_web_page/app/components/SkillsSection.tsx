"use client";

import {useState} from "react";

const SkillsSection = () => {
const [extraClasses, setExtraClasses] = useState("")

  return (
    <section id="skills">
      <div className="center">
        <h2>SKILLS</h2>
        <div className={`${extraClasses} skills-container`}>
          <div className="skill-box">
            <img src="/img/JS.png" alt="js-logo" />
            <span>JavaScript</span>
          </div>
          <div className="skill-box">
            <img src="/img/html.png" alt="html-logo" />
            <span>HTML</span>
          </div>
          <div className="skill-box">
            <img src="/img/css.png" alt="css-logo" />
            <span> {} CSS </span>
          </div>
          <div className="skill-box">
            <img src="/img/react.png" alt="react-logo" />
            <span>React</span>
          </div>
          <div className="skill-box">
            <img src="/img/mongoDB.png" alt="mongo-logo" />
            <span>MongoDB</span>
          </div>
          <div className="skill-box">
            <img src="/img/python.png" alt="python-logo" />
            <span>Python</span>
          </div>
          <div className="skill-box">
            <img src="/img/node.png" alt="node-logo" />
            <span>{} Node</span>
          </div>
          <div className="skill-box ">
            <img src="/img/express.png" className="express" alt="express-logo" />
            <span>Express</span>
          </div>
          <div className="skill-box ">
            <img src="/img/git.png" alt="git-logo" />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
