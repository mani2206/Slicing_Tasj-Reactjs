import { useState, useRef } from "react";
import { navLinkData } from "../Data";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [burgerWheelie, setBurgerWheelie] = useState(false);
  const linksRef = useRef(null);

  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav >
      <div className="nav-center" >
        <div className="nav-header animate__animated animate__bounce" >
          <img src={logo} alt={logo} className="logo" />
          <button
            className={burgerWheelie ? "nav-toggle toggleClick" : "nav-toggle"}
            onClick={() => {
              setShowLinks(!showLinks);
              setBurgerWheelie(!burgerWheelie);
            }}
          >
            <FaBars />
          </button>
        </div>

        <div>
          <div className="links-container" style={linksStyle}>
            <ul className="links" ref={linksRef}>
              {navLinkData.map(({ id, title }) => {
                return (
                  <li key={id}>
                    <a href="#">{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
