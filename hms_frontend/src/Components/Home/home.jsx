import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./home.css";

const Home = () => {
  return (
    <div className={"HOME"}>
      <NavBar />
      <ImageSlider slides={SliderData} />
      <Footer userName={"userName"} />
    </div>
  );
};

export default Home;