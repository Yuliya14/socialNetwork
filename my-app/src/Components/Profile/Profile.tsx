import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo profile={props.profile} status={props.status} getUser={props.getUser}
                     getStatus={props.getStatus} updateStatus={props.updateStatus}/>
        <PostsContainer/>
    </div>
}
export default Profile;

