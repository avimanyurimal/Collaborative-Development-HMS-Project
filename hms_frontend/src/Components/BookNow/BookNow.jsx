import React from "react";
import Card from "./Card";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import book1 from "./book1.png";
import book2 from "./book2.png";

function BookNow() {
  return (
    <>
      <NavBar />
      <div>
        <Card
          photo={book1}
          type="2-Men A/C Dorm"
          capacity="2"
          price="16,000"
        />
        <Card
          photo={book1}
          type="5-Men A/C Dorm"
          capacity="5"
          price="27,000"
        />
        <Card
          photo={book2}
          type="3-Men A/C Dorm"
          capacity="3"
          price="20,000"
        />
      </div>
      <Footer userName={"Samyog"} />
    </>
  );
}

export default BookNow;
