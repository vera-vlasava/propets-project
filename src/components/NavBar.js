import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-inner-wrapper">
        <div>
          <ul className="ul-nav-top">
            <li><FontAwesomeIcon icon={["fas", "home"]} />Home</li>
            <li><FontAwesomeIcon icon={["fas", "search"]} />Lost</li>
            <li><FontAwesomeIcon icon={["fas", "paw"]} />Found</li>
          </ul>
        </div>
        <div>
          <div>Services</div>
          <ul className="ul-nav-bottom">
            <li><FontAwesomeIcon icon={["fas", "hotel"]} />Hotels</li>
            <li><FontAwesomeIcon icon={["fas", "walking"]} />Walking</li>
            <li><FontAwesomeIcon icon={["fas", "dog"]} />Fostering</li>
            <li><FontAwesomeIcon icon={["fas", "stethoscope"]} />VetHelp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
