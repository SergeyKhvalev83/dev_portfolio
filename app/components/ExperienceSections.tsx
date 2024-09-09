"use client";

import {} from "react";

const ExperienceSections = () => {
  return (
    <section id="experience">
      <div className="center">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="item">
            <div className="date">
              <span className="year">Sep 2018</span>
              <span className="arrow"></span>
            </div>
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Software Development Engineer in test</h3>
              <h4>CareFirst BCBS</h4>
              <p>
                Responsible for daily smoke tests and maintenance of
                regression suit with over 700 cases. <br />
                Increased automation coverage by 45% by developing over 140
                automated test cases. <br />
                Worked with design and development teams to resolve found bugs
                quickly. <br />
                Collaborated with the product owner and development team to
                analyze the requirements and provide feedback on the
                application&apos;s functional and technical design.
                <br />
                Promoted within 10 months due to strong performance and
                organizational impact (one year ahead of schedule).
              </p>
            </div>
          </div>
          <div className="item">
            <div className="date">
              <span className="year">March 2020</span>
              <span className="arrow"></span>
            </div>
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Software Engineer</h3>
              <h4>Wells Fargo</h4>
              <p>
                Developed and maintained 4+ web applications, using TypeScript, React, Express, CSS with a focus on user-centric design.
                <br />
                Implemented scalable RESTful APIs to facilitate efficient client-server communication using Node.js, Express and Axios.
                <br />
                Developed custom RESTful APIs for third-party collaborations that expanded the web application functionality and user base by 20%.
                <br />
                Collaborated on a cross-functional team to redesign the user interface, improving user experience scores by 33%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSections;
