import React from "react";
import s from './ProfileInfo.module.css'
import profileImg from '../../../assets/Img/profileImg.jpg'
import {profileDataType} from "../../../redux/post-reducer";

type ProfileInfoPropsType = {
    profile: profileDataType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <div className={s.ProfileInfo}>
            <div><img src ={profileImg}/></div>
            <div className={s.info}>
                <h4>Yuliya dovgun</h4>
                <div>Date of Birth: 14 april</div>
                <div>City: Minsk</div>
                <div>Education: BSU'18</div>
            </div>
        </div>
    } else {
        return <div className={s.ProfileInfo}>
            <div><img src ={props.profile.photos.large}/></div>
            <div className={s.info}>
                <h4>{props.profile.fullName}</h4>
                <div>{props.profile.lookingForAJob ? "Looking for a job" : "No Looking for a job"}</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.vk}</div>
            </div>
        </div>
    }
}