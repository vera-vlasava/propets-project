import React from "react";
import { useHistory } from "react-router";

const HomeInit = () => {

  let history = useHistory();

  const clickHandleSignIn = (event) => {
    event.preventDefault();
    history.push("/sign-in");
  };

  return (
    <main className="page">
      <section className="welcome">
        <div className="welcome__row">
          <div className="welcome__content">
            <h1 className="welcome__title">
              Welcome to your <span>pawfessional</span> community
            </h1>
            <a href="./pages/home.html" className="welcome__button button-lost">
              <div className="welcome__button-container">
                <p className="content-top">I lost my pet!</p>
                <p className="content-bottom">Click to find!</p>
              </div>
              <div className="welcome__logo "></div>
            </a>
            <a
              href="#"
              className="welcome__button button-pet"
              data-micromodal-open
            >
              <div className="welcome__button-container">
                <p className="content-top">I found a pet!</p>
                <p className="content-bottom">What to do?</p>
              </div>
            </a>
          </div>
          <div
            className="welcome__img-container"
            data-da=".welcome__content,768.98,1"
          >
            <div className="welcome__img">
              <img src="/assets/images/dog-main.png" alt="Welcome" />
            </div>
          </div>
        </div>
        <div className="welcome__info-link info-link">
          I’m okay, just want to{" "}
          <a onClick={clickHandleSignIn} href="#">
            join
          </a>{" "}
          the pawsome community!
        </div>
      </section>
      <section className="banner">
        <div className="banner__row banner__container">
          Our fluffy space for lovers, admirers, dads and moms of our
          four-legged, winged, tailed guys.
        </div>
      </section>
      <section className="block-info">
        <div className="block-info__row _container">
          <div className="block-info__column">
            <div className="block-info__img">
              <img src="/assets/images/animals-main.png" alt="" />
            </div>
            <div className="block-info__content">
              <h3 className="block-info__title">
                Here is collected everything that your pet needs:
              </h3>
              <ul className="block-info__list">
                <li>professional veterinarian tips;</li>
                <li>useful information about education and care;</li>
                <li>information about pet-sitting and walking service;</li>
                <li>
                  and of course, great communication with new friends in your
                  social network!
                </li>
              </ul>
              <div className="block-info__info-link info-link">
                Make an account and <a href="#" onClick={clickHandleSignIn}>join</a> to us!
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeInit;
