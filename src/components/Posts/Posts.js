import React from "react";

const Posts = () => {
  return (
    <div className="home-page__container home-content">
      <div className="home-page__row">
        <article className="posts__cards posts services-cards">
          <div className="pet-avatar">
            <div className="posts__avatar pet-avatar__img">
              <img
                src="../images/dist/lost-pets/john-goodboy.png"
                alt="Pet avatar"
              />
            </div>
            <div className="pet-avatar__name">John Goodboy</div>
            <div className="pet-avatar__date">6 April, 10:15</div>
          </div>
          <div className="posts__text services-cards__text">
            <h3 className="posts__title">
              The quick, brown fox jumps over a lazy dog.
            </h3>
            <p>
              The quick, brown fox jumps over a lazy dog. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Why do we use
              it? It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum
            </p>
          </div>
          <div className="posts__card-details card-details">
            <a
              href="#"
              className="card-details__link services-cards__details icon-chevron-double"
              data-open="Close"
              data-close="...view details"
              title="details"
            ></a>
          </div>
          <div className="posts__card-details-like">
            <span className="icon-thumbs-up">176</span>
          </div>
          <div className="posts__card-comments card-comments">
            <h3 className="card-comments__title">Comments</h3>
            <div className="card-comments__subtitle">
              <span>John Goodboy</span> | <span>6 April, 10:15</span>
            </div>
            <div className="card-comments__text">
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <form className="card-comments__form">
              <div className="card-comments__item">
                <input type="text" placeholder="type your comment" />
              </div>
              <div className="card-comments__item">
                <button className="icon-comments">add comments</button>
              </div>
            </form>
          </div>
        </article>

        <article className="posts__cards posts services-cards">
          <div className="pet-avatar">
            <div className="pet-avatar__img">
              <img
                src="../images/dist/lost-pets/uncle-sam.png"
                alt="Pet avatar"
              />
            </div>
            <div className="pet-avatar__name">Uncle Sam</div>
            <div className="pet-avatar__date">5 April, 14:00</div>
          </div>
          <div className="posts__card-img">
            <img src="../images/dist/posts/post-img-x2.png" alt="" />
          </div>
          <div className="posts__text services-cards__text">
            <h3 className="posts__title">
              The quick, brown fox jumps over a lazy dog.
            </h3>
            <p>
              The quick, brown fox jumps over a lazy dog. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Why do we use
              it? It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum
            </p>
          </div>
          <div className="posts__card-details card-details">
            <a
              href="#"
              className="card-details__link services-cards__details icon-chevron-double"
              data-open="Close"
              data-close="...view details"
              title="details"
            ></a>
          </div>
          <div className="posts__card-details-like">
            <span className="icon-thumbs-up">176</span>
          </div>
          <div className="posts__card-comments card-comments">
            <h3 className="card-comments__title">Comments</h3>
            <div className="card-comments__subtitle">
              <span>John Goodboy</span> | <span>6 April, 10:15</span>
            </div>
            <div className="card-comments__text">
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <form className="card-comments__form">
              <div className="card-comments__item">
                <input type="text" placeholder="type your comment" />
              </div>
              <div className="card-comments__item">
                <button className="icon-comments">add comments</button>
              </div>
            </form>
          </div>
        </article>

        <article className="posts__cards posts services-cards">
          <div className="pet-avatar">
            <div className="posts__avatar pet-avatar__img">
              <img
                src="../images/dist/lost-pets/john-goodboy.png"
                alt="Pet avatar"
              />
            </div>
            <div className="pet-avatar__name">John Goodboy</div>
            <div className="pet-avatar__date">6 April, 10:15</div>
          </div>
          <div className="posts__text services-cards__text">
            <h3 className="posts__title">
              The quick, brown fox jumps over a lazy dog.
            </h3>
            <p>
              The quick, brown fox jumps over a lazy dog. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry’s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Why do we use
              it? It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using ‘Content here,
              content here’, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum
            </p>
          </div>
          <div className="posts__card-details card-details">
            <a
              href="#"
              className="card-details__link services-cards__details icon-chevron-double"
              data-open="Close"
              data-close="...view details"
              title="details"
            ></a>
          </div>
          <div className="posts__card-details-like">
            <span className="icon-thumbs-up">176</span>
          </div>
          <div className="posts__card-comments card-comments">
            <h3 className="card-comments__title">Comments</h3>
            <div className="card-comments__subtitle">
              <span>John Goodboy</span> | <span>6 April, 10:15</span>
            </div>
            <div className="card-comments__text">
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
            <form className="card-comments__form">
              <div className="card-comments__item">
                <input type="text" placeholder="type your comment" />
              </div>
              <div className="card-comments__item">
                <button className="icon-comments">add comments</button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Posts;
