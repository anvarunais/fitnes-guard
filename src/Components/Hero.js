import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img className="hero-img" alt="Heroimg" src={props.HeroImg} />

        <div className="Hero-text">
          <h2>{props.welcomeheading}</h2>
          <h1>{props.mainheading}</h1>
          <p className="paragraph-text">{props.welcomeparagraph}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
