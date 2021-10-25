import React from "react";
import s from './ProfileInfo.module.css'
import profileImg from '../../../Img/profileImg.jpg'

export const ProfileInfo = () => {
    return <div className={s.ProfileInfo}>
        <div><img src ={profileImg}/></div>
        <div className={s.info}>
            <h4>Yuliya dovgun</h4>
            <div>Date of Birth: 14 april</div>
            <div>City: Minsk</div>
            <div>Education: BSU'18</div>
        </div>
    </div>
}