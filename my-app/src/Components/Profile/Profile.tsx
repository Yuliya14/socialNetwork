import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string) => void
    changePostText: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <Posts postsData = {props.profilePage}
               addPost = {props.addPost}
               changePostText = {props.changePostText}/>
    </div>
}
export default Profile;

