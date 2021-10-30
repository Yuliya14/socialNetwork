import React from "react";
import {addPostAC, changePostTextAC} from "../../../redux/post-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";

const mapStateToProps = (state:storeType) => {
    return {
        profilePage: state.ProfilePage
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        addPost: (postText: string) => dispatch(addPostAC(postText)),
        changePostText: (newPostText: string) => dispatch(changePostTextAC(newPostText))
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
