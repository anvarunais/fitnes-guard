import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ServiceImg from "../assets/serviceimg.jpg";
import Footers from "../Components/Footers";
import Servicedestination from "../Components/Servicedestination";
import Howitworks from "../Components/Howitworks";
// import Carousel from "../Components/Carousel";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="service" HeroImg={ServiceImg} mainheading="Services" />
      <Howitworks/>
      {/* <Carousel/> */}
      {/* <Servicedestination /> */}
      <Footers />
    </>
  );
}

export default Service;
