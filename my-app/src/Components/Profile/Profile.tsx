import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

type ProfilePropsType = {
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <PostsContainer/>
    </div>
}
export default Profile;

