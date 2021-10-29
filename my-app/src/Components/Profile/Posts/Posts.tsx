import React, {ChangeEvent} from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import {actionsType, addPostAC, changePostTextAC, ProfilePageType} from "../../../redux/state";

type PostsPropsType = {
    postsData:  ProfilePageType
    dispatch: (action: actionsType) => void
}
const Posts = (props: PostsPropsType) => {

    const textareaPostRef = React.createRef() as React.RefObject<HTMLTextAreaElement>

    const addPost = () => {
        if(textareaPostRef.current?.value) {
            props.dispatch(addPostAC(textareaPostRef.current?.value))
        }
    }
    const changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostTextAC(e.currentTarget.value))
    }

    return <div className={s.Posts}>
        <div>
            <div>
                <textarea ref={textareaPostRef } placeholder={"Tell about you progress today"}
                value = {props.postsData.newPostText} onChange = {changePostText}/>
            </div>
            <button onClick={ addPost }>Add post</button>
        </div>
        {props.postsData.posts.map(p =>
            <Post id = {p.id} imgUrl = {p.imgUrl} message = {p.message} likesCount = {p.likesCount}/>)}
    </div>
}
export default Posts;
