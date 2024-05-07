import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from "./About.module.css";

function About() {
  return (
    <div className={style["MAIN"]}>
      <NavBar />
      <div className={style["AboutUs"]}>
        <div id={style["firstSection"]} className="text-black text-center">
          <h2 className="font-bold text-2xl">About MoonLight</h2>
          <span>
            We're a new hostel, located in the coolest neighborhood of
            Kathmandu, Thamel. The area is famous for its hipster vibes, and is
            the hub of backpackers from around the world. Flock is created by
            traveler souls and a team driven by Hospitality, keeping in mind,
            the comforts and needs of a backpacking. Having been stayed in
            different accommodations, in different parts of the world, we have
            put together this hostel, so you can have the best of both worlds.
          </span>
        </div>
        <div className={style["Contac"]}>
          <ul className="text-black m-9 p-10 text-center">
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
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
