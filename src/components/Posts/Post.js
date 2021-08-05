import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../store/actions/act_posts";

const Post = () => {
    console.log("ghjdthrf");
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        dispatch(getPostById(+id))
    }, []);

    const post = useSelector(state => {
        console.log(state.posts)
        return state.posts.postById
    })
    /* const renderCommentsRecords = () => {
        const comments = post.Comments;
        if (!comments.length) {
            return <h1>No comments</h1>;
        }
        return (
            <div class="card-comments__subtitle">
                {comments.map((comment) => {
                    return (
                        <CommentCard key={comment.id} comment={comment} />
                    );
                })}
                <hr />
            </div>

        );
    }; 
    */
    return (
        <div class="home-page__container home-content">
            <div class="home-page__row">
                <article class="posts__cards posts services-cards">
                    <div class="pet-avatar">
                        <div class="posts__avatar pet-avatar__img">
                            <img src={post.User.photo}
                                alt="photo"
                            />
                        </div>
                        <div class="pet-avatar__name">{post.User.fullName}</div>
                        <div class="pet-avatar__date">{post.createdAt}</div>
                    </div>
                    <div class="posts__text services-cards__text">
                        <h3 class="posts__title">
                            {post.title}
                        </h3>
                        <p>{post.text}
                        </p>
                    </div>
                    <div class="posts__card-details card-details">
                        <a
                            href="#"
                            class="card-details__link services-cards__details icon-chevron-double"
                            data-open="Close"
                            data-close="...view details"
                            title="details"
                        ></a>
                    </div>
                    <div class="posts__card-details-like">
                        <span class="icon-thumbs-up">{post.like}</span>
                    </div>
                    <div class="posts__card-comments card-comments">
                        <h3 class="card-comments__title">Comments</h3>
                        {/* <div class="card-comments__subtitle">
                            {renderCommensRecords()}
                        </div> */}
                        <form class="card-comments__form">
                            <div class="card-comments__item">
                                <input type="text" placeholder="type your comment" />
                            </div>
                            <div class="card-comments__item">
                                <button class="icon-comments">add comments</button>
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    )
};

export default Post;
