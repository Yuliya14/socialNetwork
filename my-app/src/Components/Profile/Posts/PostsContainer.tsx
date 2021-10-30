import React from "react";
import {addPostAC, changePostTextAC} from "../../../redux/post-reducer";
import Posts from "./Posts";

type PostsContainerPropsType = {
    store: any
}
const PostsContainer = (props: PostsContainerPropsType) => {

    const addPost = (postText: string) => props.store.dispatch(addPostAC(postText))

    const changePostText = (newPostText: string) => props.store.dispatch(changePostTextAC(newPostText))

    return <Posts profilePage={props.store.getState().ProfilePage}
                  addPost={addPost} changePostText={changePostText}/>
}
export default PostsContainer;
