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
import { useNavigate,Link } from "react-router-dom";

function Footer({ userName }) {
  const { isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const handelLogin = () => {
    navigate("/login");
  };
  return (
    <div className={style["footer"]}>
      <div className={style["firstSection"]}>
        <h2>About MoonLight</h2>
        <span>
          We're a new hostel, located in the coolest neighborhood of Kathmandu,
          Thamel. The area is famous for its hipster vibes, and is the hub of
          backpackers from around the world. Flock is created by traveler souls
          and a team driven by Hospitality, keeping in mind, the comforts and
          needs of a backpacking. Having been stayed in different
          accommodations, in different parts of the world, we have put together
          this hostel, so you can have the best of both worlds.
        </span>
      </div>
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
            <span>Phone: +977-32642675</span>
          </li>
          <li>
            <span>Mobile:+977-9856324785</span>
          </li>
          <li>
            <span>Email: reservations@moonlight.com</span>
          </li>
          <li>
            <span>For Collaborations, contact</span>
          </li>
          <li>
            <span>sales@moonlight.com</span>
          </li>
          <li>
            <div>
              <span> Follow Us: </span>
              <div className={style["share"]}>
                <SocialIcon url="www.twitter.com" />
                <SocialIcon url="www.facebook.com" />
                <SocialIcon url="www.github.com" />
                <SocialIcon url="www.instagram.com" />
                <SocialIcon url="www.linkedin.com" />
              </div>
            </div>
          </li>
        </ul>
        <button className={style["absloute"]}>
          {isLogin ? (
            <Link to={"/booknow"} className="p-9" >Book Now</Link>
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
