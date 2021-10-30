import React, {ChangeEvent} from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import { profilePageType } from "../../../redux/post-reducer";

type PostsPropsType = {
    profilePage:  profilePageType
    addPost: (postText: string) => void
    changePostText: (newPostText: string) => void
}
const Posts = (props: PostsPropsType) => {

    const textareaPostRef = React.createRef() as React.RefObject<HTMLTextAreaElement>

    const addPost = () => {
        if(textareaPostRef.current?.value) {
            props.addPost(textareaPostRef.current?.value)
        }
    }
    const changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }

    return <div className={s.Posts}>
        <div>
            <div>
                <textarea ref={textareaPostRef } placeholder={"Tell about you progress today"}
                value = {props.profilePage.newPostText} onChange = {changePostText}/>
            </div>
            <button onClick={ addPost }>Add post</button>
        </div>
        {props.profilePage.posts.map(p =>
            <Post id = {p.id} imgUrl = {p.imgUrl} message = {p.message} likesCount = {p.likesCount}/>)}
    </div>
}
export default Posts;