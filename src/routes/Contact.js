import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ContactImg from "../assets/contactus.jpg";
import Footers from "../Components/Footers";
import Contactdestination from "../Components/Contactdestination";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="contact" HeroImg={ContactImg} mainheading="Contact Us" />
      <Contactdestination />
      <Footers />
    </>
  );
}

export default Contact;
