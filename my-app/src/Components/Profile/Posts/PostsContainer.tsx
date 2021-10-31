import React from "react";
import {addPostAC, changePostTextAC, profilePageType} from "../../../redux/post-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {storeType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    profilePage: profilePageType
}
type mapDispatchToPropsType = {
    addPost: (postText: string) => void
    changePostText: (newPostText: string) => void
}
export type PostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:storeType): mapStateToPropsType => {
    return {
        profilePage: state.ProfilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (postText: string) => dispatch(addPostAC(postText)),
        changePostText: (newPostText: string) => dispatch(changePostTextAC(newPostText))
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
