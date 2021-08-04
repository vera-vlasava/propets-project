import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    return (
        <div>
            <img src={post.User.photo} alt="photo" />
            Author: {post.User ? `${post.User.fullName}` : "No Name"}
            <span>{post.createdAt}</span>

            <div className="card-body">
                <img src={post.photo} className="card-img-bottom" alt="photo" />
                <h5 className="card-text">
                </h5>
            </div>
            <h2 className="card-title">{post.title}</h2>
            <div className="card-action"> <Link to={`/posts/${post.id}`}> More ... </Link> </div>
            <div>Like: {post.like}</div>
        </div>
    );
};

export default PostCard;
