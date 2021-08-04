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
            <div className="row">
                {allPostsRecords.map((post) => {
                    return (
                        <PostRecordCard key={post.id} post={post} />
                    );
                })}
                <hr />
            </div>

        );
    };
    return (
       
            <section className="home-page__content">
                <div className="home-page__container">
                    <div >
                        {renderPostsRecords()}
                    </div>
                </div>
            </section>
        
    );
};

export default PostsRecords;
