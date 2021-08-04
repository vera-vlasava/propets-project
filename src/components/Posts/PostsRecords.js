import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/act_posts";
import PostRecordCard from "./PostRecordCard";
import NavBar from "../NavBar";
import UserBar from "../UserBar";

const PostsRecords = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    const allPostsRecords = useSelector((state) => state.posts.list);
    console.log(allPostsRecords);

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
        <main className="page home-page">
            <NavBar />
            <section className="home-page__content">
                <div className="home-page__container">
                    <div >
                        {renderPostsRecords()}
                    </div>
                </div>
            </section>
            <UserBar />
        </main>
    );
};

export default PostsRecords;
