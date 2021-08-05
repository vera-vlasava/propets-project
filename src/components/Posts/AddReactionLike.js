import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { addLikeToPost } from "../../store/actions/act_posts";

const AddReactionLike = ({ post, addLike }) => {
  const posts = useSelector((state) => {
    return state.posts.list;
  });
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const addNewLike = (event) => {
    event.preventDefault();
    addLike(post.id);
  };

  return (
    <div>
      <span className="icon-thumbs-up" onClick={addNewLike}>
        {post.like}
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (id) => dispatch(addLikeToPost(id)),
  };
};

export default connect(null, mapDispatchToProps)(AddReactionLike);
