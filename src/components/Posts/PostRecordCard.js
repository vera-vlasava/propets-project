import React from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const PostRecordCard = ({ post }) => {
    let history = useHistory();
    const clickHandle = (event) => {
        console.log("нажал")
        event.preventDefault();
        history.push(`/posts/${post.id}`);
    };
    return (
        <div className="home-page__container home-content">
            <div className="home-page__row">
                {/* <article className="posts__cards posts services-cards"> */}
                <article className="posts__cards posts">
                    <div className="pet-avatar">
                        <div className="posts__avatar pet-avatar__img">
                            <img
                                src={post.User.photo}
                                alt="photo"
                            />
                        </div>
                        <div className="pet-avatar__name">{post.User ? `${post.User.fullName}` : "No Name"}</div>
                        <div className="pet-avatar__date">{post.createdAt}</div>
                    </div>
                    <div className="posts_card-post-photo">
                        <img src={post.photo} alt="" />
                    </div>
                    <div className="posts__text services-cards__text">
                        <h3 className="posts__title">
                            {post.title}
                        </h3>
                    </div>
                    <div className="posts__card-details card-details">
                        <a
                            href="#"
                            onClick={clickHandle}
                            className="card-details__link icon-chevron-double"
                            title="View details"
                        >
                            view details
                        </a>
                        {/* <Link to={`/posts/${post.id}`}> More ... </Link> */}
                    </div>
                    <div className="posts__card-details-like">
                        <span className="icon-thumbs-up">Like {post.like}</span>
                    </div>
                </article>
            </div>
        </div>
    );

};

export default PostRecordCard;
