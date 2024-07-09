// import Destination from "../Components/Destination";
import Experience from "../Components/Experience";
import Carousel from "../Components/Carousel";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footers from "../Components/Footers";
import HomeImg from "../assets/homeimg.jpg";
// import Aboutdestination from "./Aboutdestination";
import Servicedestination from "../Components/Servicedestination";
import Howitworks from "../Components/Howitworks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={HomeImg}
        mainheading="Fitness Guard"
        welcomeheading="Welcome to "
        welcomeparagraph="At Fitness Guard, we're dedicated to helping you achieve your fitness goals with expert advice, tailored plans, and ongoing encouragement from our certified trainers. Join over 1000 satisfied clients who have transformed their lives with our guidance."
        whychoose="Why Choose Fitness Guard?"
      />
      {/* <Aboutdestination /> */}
      {/* <Destination /> */}
      <Howitworks/>
      <Carousel/>
      <Experience />
      <Servicedestination/>
      {/* <Howitworks /> */}
      <Footers />
    </>
  );
}

export default Home;
