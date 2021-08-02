import React from "react";
import NavBar from "../NavBar";
import UserBar from "../UserBar";

const UserProfile = () => {
  return (
    <main className="page home-page">
      <NavBar />
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
              <img src="../images/dist/users/anna-smith.jpg" alt="" />
            </div>
            <div className="my-profile__user-information-name icon-pencil-alt">
              Anna Smith
            </div>
          </div>
          <form className="my-profile__user-form">
            <div className="my-profile__user-date">
              <label for="">Email:</label>
              <input
                type="text"
                placeholder="helenjohnson@gmail.com"
                readonly
                disabled
              />
            </div>
            <div className="my-profile__user-date">
              <label for="">Phone:</label>
              <input type="text" placeholder="000-000-00-00" />
            </div>
            <div className="my-profile__user-date">
              <label for="">Avatar:</label>
              <input type="text" placeholder="site.com/my-avatar.img" />
            </div>
            <div className="my-profile__user-date-container">
              <div className="my-profile__user-date-container-form">
                <div className="my-profile__user-date">
                  <label for="">My pet:</label>
                  <input type="text" placeholder="Dog" />
                </div>
                <div className="my-profile__user-date">
                  <label for="">Nick:</label>
                  <input type="text" placeholder="Uncle Sam" />
                </div>
                <div className="my-profile__user-date">
                  <label for="">Photo:</label>
                  <input type="text" placeholder="site.com/my-photo.img" />
                </div>
              </div>
              <div className="my-profile__user-date-container-img">
                <img src="../images/dist/lost-pets/john-goodboy.png" alt="" />
              </div>
            </div>

            <div className="my-profile__user-date-buttons">
              <button className="button border-blue">Cancel</button>
              <button className="button blue icon-save">Save changes</button>
            </div>
          </form>
        </div>
      </div>
      <UserBar />
    </main>
  );
};

export default UserProfile;
