import { useContext } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./home.css";
import { UserContext } from "../Login/isLogin";
import ResidentHome from "../Resident_Home/ResidentHome";

const Home = () => {
  const { isResident } = useContext(UserContext);
  return (
    <div className={"HOME"}>
      {/* <NavBar /> */}
      {isResident ? <ResidentHome /> : <ImageSlider slides={SliderData} />}
      {/* <ImageSlider slides={SliderData} /> */}
      {/* <Footer userName={"userName"} /> */}
    </div>
  );
};

export default Home;
