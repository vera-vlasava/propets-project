import React from "react";

const AddPost = () => {
  return (
      <div className="home-page__container add-post__content">
        <h2 className="home-page__title">
          Your new post! Simply text, add photo and publish.
        </h2>
        <div className="home-page__row ">
          <form className="add-post__form">
            <div className="add-post__item">
              <label>Title:</label>
              <input
                className="add-post__input"
                type="text"
                placeholder="The quick, brown fox jumps"
                name="title"
              />
            </div>
            <div className="add-post__item">
              <label>Text:</label>
              <textarea
                className="add-post__textarea"
                rows="16"
                placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                name="text"
              ></textarea>
            </div>
            <div className="add-post__item">
              <label>Photo:</label>
              <input
                className="add-post__input"
                type="text"
                placeholder="The quick, brown fox jumps"
                name="title"
              />
            </div>
            <div className="add-post__item">
              <div class="add-post__avatar">
                <div class="posts__avatar add-post__avatar">
                  <img src="/assets/images/3b0045c9cc47b640ddcb43d6d06d1379@2x.png" />
                </div>
                <div class=" add-post__name">John Goodboy</div>
              </div>
              <div className="add-post__button">
                <button
                  // onClick={clickHandle}
                  className="button blue icon-paw"
                  type="submit"
                >
                  <span className="text">Publish</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  
  );
};

export default AddPost;
