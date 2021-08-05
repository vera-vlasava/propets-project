import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doSignOut, getUserById } from "../../store/actions/act_user";

const UserBar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const id = localStorage.userId;
  const isAuth = useSelector((state) => state.users.isAuth);

  useEffect(() => {
    dispatch(getUserById(+id));
  }, []);

  const user = useSelector((state) => state.users.getUserById);

  const [profile, setProfile] = useState({ fName: "", lName: "" });

  useEffect(() => {
    if (user.fullName) {
      const getName = user.fullName.split(" ");
      setProfile({ fName: getName[0], lName: getName[1] });
    }
  }, [user]);

  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/users/${+id}`);
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
            <div className="user-card__name">{profile.fName}</div>
            <div className="user-card__name">{profile.lName}</div>
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
