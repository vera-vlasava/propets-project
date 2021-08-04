import React from "react";

const LostPetProfile = () => {
  return (
      <div className="home-page__container hotels">
        <h2 className="home-page__title">
          Lost pet: <span className="pet-type">Uncle Sam</span>
          <span className="card-address icon-map-marker">
            {" "}
            Schloss Str, Potsdam
          </span>
        </h2>
        <div className="home-page__row hotels__content">
          <article className="card card-more">
            <div
              className="card-more__img"
            ></div>
            <div className="card-more__info">
              <h3 className="card-more__title">
                <span>Dog</span>, <span>Golden retriever</span>
              </h3>
              <div className="card-more__date">Dec 12, 2019</div>
              <div className="card-more__item">
                <span>Color:</span> golden
              </div>
              <div className="card-more__item">
                <span>Sex:</span> male
              </div>
              <div className="card-more__item">
                <span>Height:</span> 45 cm
              </div>
              <div className="card-more__item">
                <span>Distinctive features:</span> blue collar with stars, no
                left ear, damaged tail. Junk MTV quiz graced by
              </div>
            </div>
            <div className="card-more__description">
              <div className="card-more__item">
                <span>Description:</span> brown fox jumps over a lazy dog. DJs
                flock by when MTV ax quiz prog. Junk MTV quiz graced by fox
                whelps. Bawds jog, flick quartz, vex nymphs. raced by fox
                whelps. Bawds jog, flick quartz, vex nymphs.
              </div>
            </div>
            <div className="card-more__contact">

              <div className="card-more__item">
                <span>Phone:</span>
                <a href="tel:+">000 000 0000</a>
              </div>
              <div className="card-more__item">
                <span>e-mail::</span>
                <a href="mailto:anna@mail.com">anna@mail.com</a>
              </div>
            </div>
          </article>
        </div>
      </div>
  );
};

export default LostPetProfile;
