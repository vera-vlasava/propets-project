import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserBar = () => {
  return (
    // <div className="user-wrapper">
    //   <div className="user-inner-wrapper"><FontAwesomeIcon icon={["fas", "sign-out-alt"]} />Logout</div>
    // </div>

    <aside className="home-page__sidebar-right">
      <div className="user-card">
        <div className="user-card__info">
          <div className="user-card__img">
            <img src="../images/dist/users/anna-smith.jpg" alt="" />
          </div>
          <div className="user-card__name">Anna</div>
          <div className="user-card__name">Smith</div>
        </div>

        <a href="" className="user-card__logout icon-sign-out-alt">
          Logout
        </a>
      </div>
    </aside>
  );
};

export default UserBar;
