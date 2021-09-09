import React from "react";
import { useHistory, useLocation } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  let history = useHistory();
  let location = useLocation();
  const path = location.pathname.split("/");

  const isAuth = useSelector((state) => state.users.isAuth);

  const clickHandleFound = (event) => {
    event.preventDefault();
    history.push("/add-new-found-pet");
  };

  const clickHandleLost = (event) => {
    event.preventDefault();
    history.push("/add-new-lost-pet");
  };

  const clickHandleAddPost = (event) => {
    event.preventDefault();
    history.push("/add-new-post");
  };

  const renderButtons = () => {
    if (
      isAuth &&
      (path[1] == "lost-pets" || path[1] == "found-pets")
    ) {
      return (
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
      );
    } else if (!isAuth || location.pathname == "/add-new-lost-pet" || location.pathname == "/add-new-found-pet") {
      return null;
    } else {
      return (
        <div className="header__buttons">
          <button
            onClick={clickHandleAddPost}
            className="header__button button blue icon-plus add"
          >
            <span>Add new</span>
          </button>
        </div>
      );
    }
  };

  return (
    <header className="header home-header">
      <div className="header-row _container">
        <a href="/" className="home-header logo-blue logo">
          <img src="/assets/images/main-logo-color.svg" />
        </a>
        <div>{renderButtons()}</div>
      </div>
    </header>
  );
};

export default Header;
