import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewPost } from "../../store/actions/act_posts";

const AddPost = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [formData, setFormData] = useState({
    title: "",
    text: "",
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
    dispatch(addNewPost(formData));
    history.push("/");
  };

  return (
    <div className="home-page__container add-post__content">
      <h2 className="home-page__title">
        Your new post! Simply text, add photo and publish.
      </h2>
      <div className="home-page__row ">
        <form onSubmit={submitHandle} className="add-post__form">
          <div className="add-post__item">
            <label>Title:</label>
            <input
              className="add-post__input"
              type="text"
              placeholder="The quick, brown fox jumps"
              name="title"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="add-post__item">
            <label>Text:</label>
            <textarea
              className="add-post__textarea"
              rows="16"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
              name="text"
              onChange={changeFieldHandle}
            ></textarea>
          </div>
          <div className="add-post__item">
            <label>Photo:</label>
            <input
              className="add-post__input"
              type="text"
              placeholder="The quick, brown fox jumps"
              name="photo"
              onChange={changeFieldHandle}
            />
          </div>
          <div className="add-post__item">
            <div className="add-post__avatar">
              <div className="posts__avatar add-post__avatar">
                <img src="/assets/images/3b0045c9cc47b640ddcb43d6d06d1379@2x.png" />
              </div>
              <div className=" add-post__name">John Goodboy</div>
            </div>
            <div className="add-post__button">
              <button className="button blue icon-paw" type="submit">
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
