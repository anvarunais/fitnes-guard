import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/about.jpg";
import Footers from "../Components/Footers";
import Aboutdestination from "./Aboutdestination";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="about" HeroImg={AboutImg} mainheading="About Us" />
      <Aboutdestination/>
      <Footers />
    </>
  );
}

export default About;
