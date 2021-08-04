import React from "react";
import { useHistory } from "react-router";

const Header = (props) => {
  let history = useHistory();

  const clickHandleFound = (event) => {
    event.preventDefault();
    history.push("/add-new-found-pet");
  };

  const clickHandleLost = (event) => {
    event.preventDefault();
    history.push("/add-new-lost-pet");
  };


  return (
    <header className="header home-header">
      <div className="header-row _container">
        <a href="/" className="home-header logo-blue logo">
          <img src="/assets/images/main-logo-color.svg" />
        </a>
        <div className="header__buttons">
          <button
            onClick={clickHandleLost}
            className="header__button button red icon-search lost"
          >
            <span>I lost my pet</span>
          </button>
          <button
            onClick={clickHandleFound}
            className="header__button button blue icon-paw found"
          >
            <span>I found a pet</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
