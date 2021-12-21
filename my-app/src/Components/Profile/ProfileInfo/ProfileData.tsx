import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfilePropsType} from "../ProfileContainer";
type ProfileDataPropsType = ProfilePropsType & {
    goToEditMode: () => void
}
export const ProfileData = (props: ProfileDataPropsType) => {
    if (props.profile) {
        return <div className={s.info}>
            {props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
            <h4>{props.profile.fullName}</h4>
            <div>{props.profile.lookingForAJob ? "Looking for a job" : "No Looking for a job"}</div>
            <div>{props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "About me"}</div>
            <div>Facebook: {props.profile.contacts.facebook !== null ? props.profile.contacts.facebook : "without"}</div>
            <div>VK: {props.profile.contacts.vk !== null ? props.profile.contacts.vk : "without"}</div>
        </div>
    }
    return null
}
