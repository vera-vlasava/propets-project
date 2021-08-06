import React from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const PostRecordCard = ({ post }) => {
  let history = useHistory();
  const clickHandle = (event) => {
    event.preventDefault();
    history.push(`/posts/${post.id}`);
  };

  const date = new Date(post.createdAt).toLocaleString();
  return (
    <article className="posts__cards posts services-cards bottom">
      <div className="pet-avatar">
        <div className="posts__avatar pet-avatar__img">
          <img src="/assets/images/puppy-avatar.png" alt="photo" />
        </div>
        <div className="pet-avatar__name">
          {post.User ? `${post.User.fullName}` : "No Name"}
        </div>
        <div className="pet-avatar__date">{date}</div>
      </div>
      <div className="posts__card-img">
        <img src={post.photo} alt="" />
      </div>
      <div className="posts__text services-cards__text">
        <h3 className="posts__title">{post.title}</h3>
      </div>
      <div className="posts__card-details card-details">
        <a
          href="#"
          onClick={clickHandle}
          className="card-details__link icon-chevron-double"
          title="View details"
        >
          ...more
        </a>
      </div>
      <div className="posts__card-details-like bottom">
        <span className="icon-thumbs-up">Like {post.like}</span>
      </div>
    </article>
  );
};

export default PostRecordCard;
