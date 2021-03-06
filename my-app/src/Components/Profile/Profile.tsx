import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile = (props:  ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo {...props}/>
        <PostsContainer/>
    </div>
}
export default Profile;

