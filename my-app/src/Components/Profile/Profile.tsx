import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfilePropsType} from "./ProfileAPIContainer";

const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo profile = {props.profile}/>
        <PostsContainer/>
    </div>
}
export default Profile;

