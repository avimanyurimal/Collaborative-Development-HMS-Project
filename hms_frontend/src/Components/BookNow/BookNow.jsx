import React from "react";
import Card from "./Card";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import book1 from "./book1.png";
import book2 from "./book2.png";
import style from "./booknow.module.css"

function BookNow() {
  // Function to handle booking
  const handleBookNow = async (roomType) => {
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomType })
      });
      const data = await response.json();
      // Handle response, e.g., show success message or update state
      console.log(data);
    } catch (error) {
      console.error('Error booking room:', error);
    }
  };

  return (
    <div className={style["MAIN"]}>
      <NavBar />
      <div>
        <Card
          photo={book1}
          type="2-Men A/C Dorm"
          capacity="2"
          price="16,000"
          onBook={() => handleBookNow("2-Men A/C Dorm")}
        />
        <Card
          photo={book1}
          type="5-Men A/C Dorm"
          capacity="5"
          price="27,000"
          onBook={() => handleBookNow("5-Men A/C Dorm")}
        />
        <Card
          photo={book2}
          type="3-Men A/C Dorm"
          capacity="3"
          price="20,000"
          onBook={() => handleBookNow("3-Men A/C Dorm")}
        />
      </div>
      <Footer userName={"UserName"} />
    </div>
  );
}

export default BookNow;
