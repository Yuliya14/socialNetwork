import {ProfilePropsType} from "../ProfileContainer";
import s from "./ProfileInfo.module.css";
import React from "react";
import {Input, Textarea} from "../../common/Form";
import {Field, reduxForm} from "redux-form";

const ProfileDataReduxForm = (props: any) => {
    if (props.profile) {
        return <form className={s.info} onSubmit={props.handleSubmit}>
            <div>Full name: </div>
            <Field component = {Input} type={"text"} placeholder={"full name"} name={"fullName"}/>
            <div>Looking for a job: </div>
            <Field component = {Input} type={"checkbox"} placeholder={"looking for a job"} name={"lookingForAJob"}/>
            <div>About me: </div>
            <Field component = {Textarea} placeholder={"about me"} name={"lookingForAJobDescription"}/>
            <div>Contacts:
            <div>
                <div>github:</div><Field component = {Input} type={"text"} placeholder={"github"} name={"contacts.github"}/>
                <div>vk:</div><Field component = {Input} type={"text"} placeholder={"vk"} name={"contacts.vk"}/>
                <div>instagram:</div><Field component = {Input} type={"text"} placeholder={"instagram"} name={"contacts.instagram"}/>
            </div>
            </div>
            <button onClick={(e) => {props.saveData(e.currentTarget.value)}}>save</button>
        </form>
    }
    return null
}
export const ProfileDataForm = reduxForm<ProfilePropsType, any>({form: 'profile'})( ProfileDataReduxForm)