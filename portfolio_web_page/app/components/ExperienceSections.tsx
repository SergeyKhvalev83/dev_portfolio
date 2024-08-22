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
              <span className="year">2022</span><span className="arrow"></span>
            </div>
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Frontend developer</h3>
              <h4>Fl, Orlando</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad eaque, quibusdam necessitatibus ducimus earum
                molestiae rerum nisi quas non nobis nemo perferendis, voluptas
                amet, in illum obcaecati unde molestias.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="date">
              {" "}
              <span className="year">2022</span><span className="arrow"></span>
            </div>
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Frontend developer 2</h3>
              <h4>ME, Main</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad eaque, quibusdam necessitatibus ducimus earum
                molestiae rerum nisi quas non nobis nemo perferendis, voluptas
                amet, in illum obcaecati unde molestias.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="date">
              <span className="year">2022</span> <span className="arrow"></span>
            </div>
            <div className="separator">
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className="texts">
              <h3>Frontend developer 3</h3>
              <h4>CA, Los Angeles</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad eaque, quibusdam necessitatibus ducimus earum
                molestiae rerum nisi quas non nobis nemo perferendis, voluptas
                amet, in illum obcaecati unde molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSections;
