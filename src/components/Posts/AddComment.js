import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addComment } from "../../store/actions/act_comments";
import CommentCard from "./CommentCard";

const AddComment = ({ activePost }) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        postId: activePost.id,
        text: "",
    });
    const [post, setPost] = useState({})

    useEffect(() => {
        if (activePost) {
            setPost(activePost)
        }
    }, [activePost]);

    const changeFieldHandle = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandle = (event) => {
        event.preventDefault();
        setPost(activePost)
        dispatch(addComment(formData));
    };
    const renderCommentsRecords = () => {
        const comments = activePost.Comments;

        if (!comments.length) {
            return <span>No comments</span>;
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
    return (
        <div class="posts__card-comments card-comments">
            <h3 class="card-comments__title">Comments</h3>
            <div class="card-comments__subtitle">
                {renderCommentsRecords()}
            </div>

            <form class="card-comments__form"
                onSubmit={submitHandle}>
                <div class="card-comments__item">
                    <input type="text" name="text" placeholder="type your comment" onChange={changeFieldHandle} />
                </div>
                <div class="card-comments__item">
                    <button class="icon-comments">add comments</button>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLocalComment: (comment) => dispatch(addComment(comment)),
    };
};

export default connect(null, mapDispatchToProps)(AddComment);