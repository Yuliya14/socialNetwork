import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import {postsDataType} from "../../../redux/state";

type PostsPropsType = {
    postsData: postsDataType[]
}
const Posts = (props: PostsPropsType) => {

    return <div className={s.Posts}>
        <div>
            <div><textarea placeholder={"Tell about you progress today"}></textarea></div>
            <button>Add post</button>
        </div>
        {props.postsData.map(p => <Post id = {p.id} imgUrl = {p.imgUrl} message = {p.message} likesCount = {p.likesCount}/>)}
    </div>
}
export default Posts;
