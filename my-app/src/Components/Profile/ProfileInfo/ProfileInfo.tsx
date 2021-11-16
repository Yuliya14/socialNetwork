import React from "react";
import s from './ProfileInfo.module.css'
import ProfileStatus from "../ProfileStatus";
import {ProfilePropsType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";


export const ProfileInfo = (props: ProfilePropsType) => {
    if (!props.profile) return <Preloader isLoad={true}/>
    else {
        return <div className={s.ProfileInfo}>
            <div><img src ={props.profile.photos.large}/></div>
            <ProfileStatus {...props}/>
            <div className={s.info}>
                <h4>{props.profile.fullName}</h4>
                <div>{props.profile.lookingForAJob ? "Looking for a job" : "No Looking for a job"}</div>
                <div>Facebook: {props.profile.contacts.facebook !== null ? props.profile.contacts.facebook : "without"}</div>
                <div>VK: {props.profile.contacts.vk!== null ? props.profile.contacts.vk : "without"}</div>
            </div>
        </div>
    }
}