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
      <div class="home-page__row">
        {allPostsRecords.map((post) => {
          return <PostRecordCard key={post.id} post={post} />;
        })}
      </div>
    );
  };
  return (
    <div className="home-page__container home-content">
      <div>{renderPostsRecords()}</div>
    </div>
  );
};

export default PostsRecords;
