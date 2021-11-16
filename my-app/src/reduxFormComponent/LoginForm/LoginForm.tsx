import React from "react";
import style from "./LoginForm.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../Components/common/Form";
import {maxCountOfSymbols, required} from "../Validator/ValidatorForm"

export type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const maxLoginSymbol = maxCountOfSymbols(30)
const maxPasswordSymbol = maxCountOfSymbols(20)
const LoginReduxForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props: any) => {
    return <form className={style.form} onSubmit={props.handleSubmit}>
        <Field component = {Input} validate = {[required, maxLoginSymbol]} type={"text"} placeholder={"email"} name={"email"}/>
        <Field component = {Input} validate = {[required, maxPasswordSymbol]} type={"password"} placeholder={"password"} name={"password"}/>
        <div><Field component = {"input"} type={"checkbox"} name = {"rememberMe"}/><span>remember me</span></div>
        <button>SignIn</button>
    </form>
}
const LoginForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginReduxForm)

export default LoginForm