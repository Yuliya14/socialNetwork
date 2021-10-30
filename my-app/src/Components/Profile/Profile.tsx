import React from "react";
import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionsType, profilePageType} from "../../redux/store";
type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: actionsType) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div className={s.profile}>
        <ProfileInfo/>
        <Posts postsData = {props.profilePage} dispatch = {props.dispatch}/>
    </div>
}
export default Profile;

