import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import {postsDataType} from "../../../redux/state";

type PostsPropsType = {
    postsData: postsDataType[]
    addPost: (postText: string) => void
}
const Posts = (props: PostsPropsType) => {

    const textareaPostRef = React.createRef() as React.RefObject<HTMLTextAreaElement>

    const addPost = () => {
        if(textareaPostRef.current?.value){props.addPost(textareaPostRef.current?.value)}
    }

    return <div className={s.Posts}>
        <div>
            <div>
                <textarea ref={textareaPostRef } placeholder={"Tell about you progress today"}/>
            </div>
            <button onClick={ addPost }>Add post</button>
        </div>
        {props.postsData.map(p => <Post id = {p.id} imgUrl = {p.imgUrl} message = {p.message} likesCount = {p.likesCount}/>)}
    </div>
}
export default Posts;
