import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";
type ProfilePropsType = {
    profilePage: ProfilePageType
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <Posts postsData = {props.profilePage.posts}/>
    </div>
}
export default Profile;

