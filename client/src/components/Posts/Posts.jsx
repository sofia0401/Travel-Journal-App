import React from "react";
import { useSelector } from "react-redux";
import useStyles from './styles';

import Post from './Post/Post';

function Posts() {
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);
    return(
        <div className="mainContainer">
            <h1>POSTS</h1>
            <Post/>
        </div>
    );
}

export default Posts;