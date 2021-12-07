import React from "react";
import s from './Posts.module.css'
import Post from "./Post/Post";
import {PostsPropsType} from "./PostsContainer";
import PostsForm, {PostsFormDataType} from "../../../reduxFormComponent/PostForm/PostsForm";

const Posts = React.memo((props: PostsPropsType) => {
    const addPost = (values: PostsFormDataType) => {
        if (values.post) {
            props.addPost(values.post)
        }
    }
    return <div className={s.Posts}>
        <PostsForm  onSubmit = {addPost}/>
        {props.profilePage.posts.map(p =>
            <Post key={p.id} id={p.id} imgUrl={p.imgUrl} message={p.message} likesCount={p.likesCount}/>)}
    </div>
})
export default Posts;


