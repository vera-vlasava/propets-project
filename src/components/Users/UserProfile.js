import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updateUser } from "../../store/actions/act_user";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getUserById(+id));
  }, []);

  const user = useSelector((state) => state.users.getUserById);

  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  const [formData, setFormData] = useState({
    phone: "",
    avatar: "",
    pet: "",
    nick: "",
    photo: "",
  });

  const changeFieldHandle = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <div className="home-page__container my-profile__content">
      <h2 className="home-page__title">
        Your profile. Change, edit and manage your data.
      </h2>
      <div className="home-page__row ">
        <div className="my-profile__title">
          <h3>My profile</h3>
        </div>
        <div className=" my-profile__user-information">
          <div className="my-profile__user-information-img">
            <img src="/assets/images/anna-smith.jpg" alt="" />
          </div>
          <div className="my-profile__user-information-name icon-pencil-alt">
            {profile.fullName}
          </div>
        </div>
        <form onSubmit={submitHandle} className="my-profile__user-form">
          <div className="my-profile__user-date">
            <label for="">Email:</label>
            <input type="text" placeholder={profile.email} readOnly disabled />
          </div>
          <div className="my-profile__user-date">
            <label for="">Phone:</label>
            <input
              onChange={changeFieldHandle}
              type="text"
              name="phone"
              placeholder={profile.phone}
            />
          </div>
          <div className="my-profile__user-date">
            <label for="">Avatar:</label>
            <input
              onChange={changeFieldHandle}
              type="text"
              name="avatar"
              placeholder={profile.avatar}
            />
          </div>
          <div className="my-profile__user-date-container">
            <div className="my-profile__user-date-container-form">
              <div className="my-profile__user-date">
                <label for="">My pet:</label>
                <input
                  onChange={changeFieldHandle}
                  type="text"
                  name="pet"
                  placeholder={profile.pet}
                />
              </div>
              <div className="my-profile__user-date">
                <label for="">Nick:</label>
                <input
                  onChange={changeFieldHandle}
                  type="text"
                  name="nick"
                  placeholder={profile.nick}
                />
              </div>
              <div className="my-profile__user-date">
                <label for="">Photo:</label>
                <input
                  onChange={changeFieldHandle}
                  type="text"
                  name="photo"
                  placeholder={profile.photo}
                />
              </div>
            </div>
            <div className="my-profile__user-date-container-img">
              <img
                src="\assets\images\3b0045c9cc47b640ddcb43d6d06d1379@2x.png"
                alt=""
              />
            </div>
          </div>

          <div className="my-profile__user-date-buttons">
            <button type="reset" className="button border-blue">
              Cancel
            </button>
            <button type="submit" className="button blue icon-save">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
