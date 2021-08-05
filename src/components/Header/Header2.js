import React from "react";
import { useHistory } from "react-router";

const Header2 = () => {
  let history = useHistory();

  const clickHandleSignIn = (event) => {
    event.preventDefault();
    history.push("/sign-in");
  };

  return (
    <header className="header">
      <div className="header-row _container">
        <div className="header-logo logo logo-white">
          <img src="/assets/images/main-logo-white.svg" />
        </div>
        <div className="header__buttons">
          <button
            onClick={clickHandleSignIn}
            className="header__button button"
            data-micromodal-open="modal-1"
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header2;
