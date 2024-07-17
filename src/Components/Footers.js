import "./Footers.css";
// import nav_logo from "../assets/fitness-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Footer_logo from "../assets/fitness-logo.png";

const Footers = () => {
  return (

    <div className="footerstyle  text-white">
  <div className="container py-5">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <img src={Footer_logo} alt="Footer Logo" className="footerlogo img-fluid" />
      </div>
      <div className="col-md-3 col-sm-6">
        <h4 className=" mb-4">Contact</h4>
        <p>
          <FaPhoneAlt className="me-2" />
          <span className="footer-contact">91 9645114245</span>
          <br />
          <FaEnvelope className="me-2" />
          <span className="footer-contact">fitnessguarde@gmail.com</span>
        </p>
      </div>
      <div className="col-md-3 col-sm-6">
        <h4 className="followus mb-4">Follow Us</h4>
        <p className="social-icons">
          <a href="https://wa.me/919645114245" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp-square iconss"></i>
          </a>{" "}
          <a href="https://www.instagram.com/fitnessguard_?igsh=YnN3YzF2dHp4NjVz" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram-square iconss"></i>
          </a>{" "}
          <a href="https://www.facebook.com/fitnessguard0/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square iconss"></i>
          </a>
        </p>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* Optional Address Section */}
        {/* <h4 className="text-warning mb-4">Address</h4>
        <p>
          <FaHome className="me-2" />
          <span className="footer-contact">Fitness Guard</span> <br />
          <FaPhoneAlt className="me-2" />
          <span className="footer-contact">7025040484</span> <br />
          <FaEnvelope className="me-2" />
          <span className="footer-contact">example@gmail.com</span>
        </p> */}
      </div>
    </div>
  </div>
</div>

    // <div className="footerstyle">
    //   <div className="container">
    //     <div className="row py-5  text-white">
    //       <div className="col-md-3 col-sm-12">
    //         <img src={Footer_logo} alt="" className="footerlogo" />
    //       </div>
    //       <div className="col-md-3 col-sm-12">
    //         <h4 className="text-warning text-white">Contact</h4>
    //         <FaPhoneAlt className="me-2" />
    //         91 9645114245
    //         <br />
    //         <FaEnvelope className="me-2" />
    //         fitnessguarde@gmail.com
    //         <br />
    //       </div>
    //       <div className="col-md-3 col-sm-12">
    //         <h4 className="followus">Follow Us</h4>
    //         <p>
    //           <a href="https://wa.me/919645114245" target="_blank">
    //             <i className="fa-brands fa-whatsapp-square iconss"></i>{" "}
    //           </a>
    //           <a
    //             href="https://www.instagram.com/fitnessguard_?igsh=YnN3YzF2dHp4NjVz"
    //             target="_blank"
    //           >
    //             <i className="fa-brands fa-instagram-square iconss"></i>{" "}
    //           </a>
    //           <a href="https://www.facebook.com/fitnessguard0/">
    //             <i className="fa-brands fa-facebook-square iconss"></i>
    //           </a>
    //         </p>
    //         {/* <p>
    //           {" "}
    //           <a href="/">
    //             <i className="fa-brands fa-facebook-square"></i>
    //           </a>
    //         </p> */}
    //       </div>
    //       {/* <div className="col-md-3 col-sm-12">
    //         <h4 className="text-warning text-white">Address</h4>
    //         <FaHome className="me-2" />
    //         Fitness Grard <br />
    //         <FaPhoneAlt className="me-2" />
    //         7025040484
    //         <br />
    //         <FaEnvelope className="me-2" />
    //         example@gmail.com
    //         <br />
    //       </div> */}
    //     </div>
    //     <p className="text-white pb-5">@Copyright Code with Convo</p>
    //   </div>
    // </div>



    // <div className="footer">
    //   <div className="top">
    //     <div>
    //       <img src={nav_logo} alt="" className="logof" />
    //     </div>
    //     <div>
    //       <h1 className="followus">Follow Us</h1>
    //       <a href="/">
    //         <i className="fa-brands fa-facebook-square"></i>
    //       </a>

    //       <a href="https://wa.me/7025040484" target="_blank">
    //         <i className="fa-brands fa-whatsapp-square"></i>
    //       </a>

    //       <a
    //         href="https://www.instagram.com/fitnessguard_?igsh=YnN3YzF2dHp4NjVz"
    //         target="_blank"
    //       >
    //         <i className="fa-brands fa-instagram-square"></i>
    //       </a>
    //     </div>
    //   </div>

    //   <div className="bottom">
    //     <div className="bottom">
    //       <h1>Location</h1>
    //       <p className="bottomfooter">Banjara Hills </p>
    //       <p className="bottomfooter">Road no.5</p>
    //       <p className="bottomfooter">Hyderabad</p>
    //     </div>

    //     <div className="bottom">
    //       <h1>Contact</h1>
    //       <p>
    //         <a
    //           href="https://wa.me/7025040484"
    //           target="_blank"
    //           className="bottomfooter"
    //         >
    //           7025040484
    //         </a>
    //       </p>
    //       <p>
    //         <a
    //           href="https://wa.me/7025040484"
    //           target="_blank"
    //           className="bottomfooter"
    //         >
    //           7025040484
    //         </a>
    //       </p>
    //       <p>
    //         <a
    //           href="https://wa.me/7025040484"
    //           target="_blank"
    //           className="bottomfooter"
    //         >
    //           7025040484
    //         </a>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Footers;
