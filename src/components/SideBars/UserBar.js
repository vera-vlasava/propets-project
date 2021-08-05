import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { doSignIn, doSignOut } from "../../store/actions/act_user";

const UserBar = (user) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/users/${user.id}`);
  };

  const clickHandleSignOut = (event) => {
    event.preventDefault();
    dispatch(doSignOut());
    history.push("/");
  };
  return (
    <aside className="home-page__sidebar-right">
      <div className="user-card">
        <div onClick={clickHandle} className="user-card__info">
          <div className="user-card__img">
            <img src="/assets/images/anna-smith.jpg" alt="" />
          </div>
          <div className="user-card__name">Anna</div>
          <div className="user-card__name">Smith</div>
        </div>

        <a
          href=""
          onClick={clickHandleSignOut}
          className="user-card__logout icon-sign-out-alt"
        >
          Logout
        </a>
      </div>
    </aside>
  );
};

export default UserBar;
