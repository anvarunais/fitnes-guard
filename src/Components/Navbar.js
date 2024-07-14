import { Component } from "react";
import "./Navbar.css";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import nav_logo from "../assets/fitness-logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <img src={nav_logo} alt="" className="logo" />
        {/* <h1 className="Navbar-logo">FITNESS</h1> */}

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {/* <button>Join Us</button> */}
          <a href="https://wa.me/7025040484" target="_blank">
            <button className="navbarbtn">Join Us</button>
          </a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
