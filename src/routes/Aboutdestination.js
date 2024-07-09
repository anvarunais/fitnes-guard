import "./Aboutdestination.css";
// import image from "../assets/about.jpg";
const Aboutdestination = () => {
  return (
    <div className="first">
      <div className="aboutbottom">
        <div>
          <h1>
             Who We Are
          </h1>
          <p className="paragraph">
            Fitness Guard is a leading fitness consultancy dedicated to helping
            individuals achieve their health and fitness goals. Our certified
            trainers are committed to providing you with the best advice,
            customized plans, and the motivation you need to succeed.
          </p>
        </div>

        {/* <div>
          <img src={image} alt="" className="image" />
        </div> */}

        <div>
          <h1>
            Our Mission
          </h1>
          <p className="paragraph">
            Our mission is to empower you to take control of your health and
            fitness through personalized guidance and support. We believe that
            with the right plan and encouragement, anyone can reach their
            fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aboutdestination;
