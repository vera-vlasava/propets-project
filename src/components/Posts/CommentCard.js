import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div>
      <div className="card-comments__subtitle">
        <span>{comment.User.fullName}</span> | <span>{comment.createdAt}</span>
      </div>
      <div className="card-comments__text">{comment.text}</div>
    </div>
  );
};

export default CommentCard;
