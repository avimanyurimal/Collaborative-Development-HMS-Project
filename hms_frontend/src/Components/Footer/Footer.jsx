import React, { useContext } from "react";
import style from "./Footer.module.css";
import { UserContext } from "../Login/isLogin";
import logo from "../NavBar/logo.png";
import visa from "./visa.png";
import mastercard from "./mastercard.png";
import jcb from "./jcb.png";
import unionpay from "./unionpay.png";
import americanExpress from "./americanExpress.png";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/twitter";
import "react-social-icons/facebook";
import "react-social-icons/instagram";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import { useNavigate, Link } from "react-router-dom";

function Footer({ userName }) {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const handelLogin = () => {
    navigate("/login");
  };
  return (
    <div className={style["footer"]}>
      <div className={style["secondSection"]}>
        <div className={style["logo"]}>
          <img src={logo} alt="" className="w-72" />
        </div>
        <h2 className="text-center"> Cards we accept </h2>
        <div className={style["Payment"]}>
          <img src={visa} alt="VISA" className="w-10" />
          <img src={mastercard} alt="MASTERCARD" className="w-10" />
          <img src={jcb} alt="JCB" className="w-10" />
          <img src={unionpay} alt="UNION PAY" className="w-10" />
          <img src={americanExpress} alt="AMERICAN EXPRESS" className="w-10" />
        </div>
      </div>
      <div className={style["thirdSection"]}>
        <h2>MoonLight Hostels Address</h2>
        <ul>
          <li>
            <span>Nexal Bhagwati Mandir,Nexal, Kathmandu Nepal.</span>
          </li>
          <li>
            <div className={style["share-parent"]}>
              <span> Follow Us: </span>
              <div className={style["share"]}>
                <div
                  data-tooltip-id="my-black-tooltip"
                  data-tooltip-content="Twitter!"
                  data-tooltip-place="top">
                  <SocialIcon url="https://twitter.com/Samyog_Koirala7" />
                </div>
                <div
                  data-tooltip-id="my-black-tooltip"
                  data-tooltip-content="Facebook!"
                  data-tooltip-place="top">
                  <SocialIcon url="https://facebook.com" />
                </div>
                <div
                  data-tooltip-id="my-black-tooltip"
                  data-tooltip-content="GitHub!"
                  data-tooltip-place="top">
                  <SocialIcon url="https://github.com/samyog777" />
                </div>
                <div
                  data-tooltip-id="my-black-tooltip"
                  data-tooltip-content="Instagram!"
                  data-tooltip-place="top">
                  <SocialIcon url="https://instagram.com" />
                </div>
                <div
                  data-tooltip-id="my-black-tooltip"
                  data-tooltip-content="LinkedIn!"
                  data-tooltip-place="top">
                  <SocialIcon url="https://linkedin.com" />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <button className={style["absloute"]}>
          {isLogin ? (
            <Link to={"/booknow"} className="p-9">
              Book Now
            </Link>
          ) : (
            <span className="p-9" onClick={handelLogin}>
              Book now
            </span>
          )}
          {console.log(isLogin)}
        </button>
      </div>
    </div>
  );
}

export default Footer;
