import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const isAuth = useSelector((state) => state.users.isAuth);

  const renderNavBar = () => {
    if (isAuth) {
      return (
        <div>
          <nav className="home-page__navigation navigation">
            <div className="menu-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className="navigation__list">
              <li className="navigation__li">
                <NavLink
                  exact={true}
                  to="/home"
                  className="navigation__link icon-home"
                >
                  Home
                </NavLink>
              </li>
              <li className="navigation__li">
                <NavLink
                  exact={true}
                  to="/lost-pets"
                  data-menu="lost"
                  href="#"
                  className="navigation__link icon-search"
                >
                  Lost
                </NavLink>
              </li>
              <li className="navigation__li">
                <NavLink
                  exact={true}
                  to="/found-pets"
                  className="navigation__link icon-paw"
                >
                  Found
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav className="home-page__navigation navigation nav-services">
            <div className="nav-services__title-container">
              <h4 className="nav-services__title">Services</h4>
            </div>
            <ul className="navigation__list">
              <li className="navigation__li">
                <a
                  data-menu="hotels"
                  href="#"
                  className="navigation__link icon-hotel"
                >
                  Hotels
                </a>
              </li>
              <li className="navigation__li">
                <a
                  data-menu="walking"
                  href="#"
                  className="navigation__link icon-walking"
                >
                  Walking
                </a>
              </li>
              <li className="navigation__li">
                <a
                  data-menu="fostering"
                  href="#"
                  className="navigation__link icon-dog"
                >
                  Fostering
                </a>
              </li>
              <li className="navigation__li">
                <a
                  data-menu="vethelp"
                  href="#"
                  className="navigation__link icon-stethoscope"
                >
                  VetHelp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
    return (
      <div>
      <nav className="home-page__navigation navigation">
        <div className="menu-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navigation__list">
          <li className="navigation__li">
            {/* <NavLink
              exact={true}
              to="/home"
              className="navigation__link icon-home"
            >
              Home
            </NavLink> */}
          </li>
          <li className="navigation__li">
            <NavLink
              exact={true}
              to="/lost-pets"
              data-menu="lost"
              href="#"
              className="navigation__link icon-search"
            >
              Lost
            </NavLink>
          </li>
          <li className="navigation__li">
            <NavLink
              exact={true}
              to="/found-pets"
              className="navigation__link icon-paw"
            >
              Found
            </NavLink>
          </li>
        </ul>
      </nav>
 
    </div>
    )
  };

  return (
    <aside className="home-page__sidebar-left">
      {renderNavBar()}
    </aside>
  );
};

export default NavBar;
