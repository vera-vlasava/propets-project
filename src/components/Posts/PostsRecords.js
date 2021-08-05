import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/act_posts";
import PostRecordCard from "./PostRecordCard";

const PostsRecords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const allPostsRecords = useSelector((state) => state.posts.list);

  const renderPostsRecords = () => {
    if (!allPostsRecords.length) {
      return <h1>No posts</h1>;
    }
    return (
      <article className="posts__cards posts services-cards">
        {allPostsRecords.map((post) => {
          return <PostRecordCard key={post.id} post={post} />;
        })}
      </article>
    );
  };
  return (
    <div className="home-page__container home-content">
      <div className="home-page__row">
        <div>{renderPostsRecords()}</div>
      </div>
    </div>
  );
};

export default PostsRecords;
