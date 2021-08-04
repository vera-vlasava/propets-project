import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doSignOut } from "../../store/actions/act_user";

const UserBar = (user) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.users.isAuth);

  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/users/${user.id}`);
  };

  const clickHandleSignOut = (event) => {
    event.preventDefault();
    dispatch(doSignOut());
    history.push("/");
  };

  const renderUserBar = () => {
    if (isAuth) {
      return (
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
      );
    }
    return <div></div>;
  };
  return <aside className="home-page__sidebar-right">{renderUserBar()}</aside>;
};

export default UserBar;
