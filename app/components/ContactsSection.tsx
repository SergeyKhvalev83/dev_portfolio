"use client";

import {} from "react";

const ContactsSection = () => {
  return (
    <section id="contacts">
      <div className="center">
        <h2>Contact Me</h2>
        <div>
          <div className="box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
            <a href="mailto:kvalevsergey@gmail.com">sergeykhvalev32@gmail.com</a>
          </div>
          <div className="box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <a href="tel: 4074765212">4074636100</a>
          </div>
          <br/>
          <div className="box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <a href="https://www.google.com/maps/place/%D0%9E%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D0%BE,+%D0%A4%D0%BB%D0%BE%D1%80%D0%B8%D0%B4%D0%B0/@28.4807774,-81.6716216,10z/data=!3m1!4b1!4m6!3m5!1s0x88e773d8fecdbc77:0xac3b2063ca5bf9e!8m2!3d28.5383832!4d-81.3789269!16zL20vMHBseTA?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D">
              Orlando, Florida
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
