import React from "react";

const Header = (props) => {
  return (
    <div className="header-white">
      <div className="img-header-wrapper">
        <img src="/assets/images/main-logo-color.svg" />
      </div>

      <div className="btn-header-wrapper">{props.children}</div>
    </div>
  );
};

export default Header;
