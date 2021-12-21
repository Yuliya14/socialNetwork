import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {ProfilePropsType} from "../ProfileContainer";
import Preloader from "../../common/Preloader";
import ProfileStatusWithUseState from "../ProfileStatusWithUseState";
import userPhoto from "../../../assets/Img/user.png"
import {ProfileData} from "./ProfileData";
import {ProfileDataForm} from "./ProfileDataForm";
import {submit} from "redux-form";
import {LoginFormDataType} from "../../../reduxFormComponent/LoginForm/LoginForm";


export const ProfileInfo = React.memo((props: ProfilePropsType) => {
    const [editMode, setEditMode] = useState(false)
    const submit = (formData: any) => {
        props.saveData(formData)
        setEditMode(false)
    }
    if (!props.profile) return <Preloader isLoad={true}/>
    else {
        const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length) {
                props.savePhoto(e.target.files[0])
            }
        }
        return <div className={s.ProfileInfo}>
            <div><img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={changePhoto}/>}
            </div>
            <div>
                <ProfileStatusWithUseState {...props}/></div>
            {editMode
                ? <ProfileDataForm {...props} initialValues = {props.profile} onSubmit={submit}/>
                : <ProfileData {...props} goToEditMode={() => setEditMode(true)}/>
            }
        </div>
    }
})

