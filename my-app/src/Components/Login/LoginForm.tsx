import React from "react";
import style from "./LoginForm.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const LoginReduxForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return <form className={style.form} onSubmit={props.handleSubmit}>
        <Field component = {"input"} type={"text"} placeholder={"login"} name={"login"}/>
        <Field component = {"input"} type={"text"} placeholder={"password"} name={"password"}/>
        <div><Field component = {"input"} type={"checkbox"} name = {"rememberMe"}/><span>remember me</span></div>
        <button>SignIn</button>
    </form>
}
const LoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginReduxForm)

export default LoginForm