'use client'

import React, {useState} from 'react';

const IntoSection = () => {
  const [classes, setClasses] = useState("")
  
  return (
    <section id="intro" className={classes}>
    <div>
      <p>
        I`m <span>Sergey Khvalev </span>
        <br />
        Frontend javascript developer, <br />
        code enthusiast and tech communicator
        <br />
      </p>
      <a href="#contacts">Contact me</a>
    </div>
    <div>
      <img src="/img/me.jpg" alt="photo"></img>
    </div>
  </section>
  );
};

export default IntoSection;