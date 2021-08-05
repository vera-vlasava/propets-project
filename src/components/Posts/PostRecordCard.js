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
        <div class="home-page__container home-content">
            <div class="home-page__row">
                {/* <article class="posts__cards posts services-cards"> */}
                <article class="posts__cards posts">
                    <div class="pet-avatar">
                        <div class="posts__avatar pet-avatar__img">
                            <img
                                src={post.User.photo}
                                alt="photo"
                            />
                        </div>
                        <div class="pet-avatar__name">{post.User ? `${post.User.fullName}` : "No Name"}</div>
                        <div class="pet-avatar__date">{post.createdAt}</div>
                    </div>
                    <div class="posts_card-post-photo">
                        <img src={post.photo} alt="" />
                    </div>
                    <div class="posts__text services-cards__text">
                        <h3 class="posts__title">
                            {post.title}
                        </h3>
                    </div>
                    <div class="posts__card-details card-details">
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
                    <div class="posts__card-details-like">
                        <span class="icon-thumbs-up">Like {post.like}</span>
                    </div>
                </article>
            </div>
        </div>
    );

};

export default PostRecordCard;
