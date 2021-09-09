import React from "react";
import { useSelector } from "react-redux";

const CommentCard = ({ comment }) => {
  console.log(comment);
  const user = useSelector((state) => state.users.getUserById);
  return (
    <div>
      <div className="card-comments__subtitle">
        <span>{comment.User ? comment.User.fullName : user.fullName}</span> |{" "}
        <span>{comment.createdAt}</span>
      </div>
      <div className="card-comments__text">{comment.text}</div>
    </div>
  )
};

export default CommentCard;
