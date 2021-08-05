import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../store/actions/act_posts";
import AddComment from "./AddComment";
import AddReactionLike from "./AddReactionLike";

const Post = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostById(+id));
  }, []);

  const post = useSelector((state) => {
    return state.posts.postById;
  });

  const posts = useSelector((state) => {
    return state.posts;
  });
  useEffect(() => {
    console.log("useEffect1");
    console.log(posts);
    //dispatch(getPostById(+id))
  }, [posts]);

  return post.User ? (
    <div className="home-page__container home-content">
      <div className="home-page__row">
        <article className="posts__cards posts services-cards">
          <div className="pet-avatar">
            <div className="posts__avatar pet-avatar__img">
              <img src={post.User.photo} alt="photo" />
            </div>
            <div className="pet-avatar__name">{post.User.fullName}</div>
            <div className="pet-avatar__date">{post.createdAt}</div>
          </div>
          <div className="posts__text services-cards__text">
            <h3 className="posts__title">{post.title}</h3>
            <p>{post.text}</p>
          </div>

          <div className="posts__card-details-like">
            <AddReactionLike post={post} />
          </div>
          <AddComment activePost={post} />
        </article>
      </div>
    </div>
  ) : (
    <div>No post</div>
  );
};

export default Post;
