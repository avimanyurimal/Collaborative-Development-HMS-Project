import React from "react";
import gmail from "./gmail.png";
import whatapp from "./whatapp.png";
import call from "./call.png";
import style from "./contact.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <>
      <NavBar />
      <div className={style["info"]}>
        <div className={style["gmail"]}>
          <img className="w-8" src={gmail} alt="" />
          <span className={style["contact"]}>
            Email: moonlighthostel76@gmail.com
          </span>
        </div>
        <div className={style["call"]}>
          <img className="w-8" src={call} alt="" />
          <span className={style["contact"]}>+01-4140412</span>
        </div>
        <div className={style["whatapp"]}>
          <img className="w-8" src={whatapp} alt="" />
          <span className={style["contact"]}>+977 9847582934</span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
