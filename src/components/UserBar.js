import React from "react";
import { useHistory } from "react-router";

const UserBar = (user) => {
  let history = useHistory();
  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/users/${user.id}`);
  };
  return (
    <aside className="home-page__sidebar-right">
      <div className="user-card">
        <div onClick={clickHandle} className="user-card__info">
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
