'use client'

import React, {useEffect, useState} from 'react';

const IntoSection = () => {
  const [classes, setClasses] = useState("")

  useEffect(()=>{
    setClasses("visible")
  }, [])


  return (
    <section id="intro" className={classes}>
    <div>
      <p>
        I`m <span>Sergey Kvalev </span>
        <br />
        Frontend javascript developer, <br />
        code enthusiast and youtuber
        <br />
      </p>
      <a href="">Contact me</a>
    </div>
    <div>
      <img src="/img/me.jpg" alt="photo"></img>
    </div>
  </section>
  );
};

export default IntoSection;