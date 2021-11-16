import React from "react";
import LoginForm, {LoginFormDataType} from "../../reduxFormComponent/LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {storeType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const Login = (props: LoginPropsType) => {
    const submit = (values: LoginFormDataType) => {
        props.login(values.email, values.password, values.rememberMe)
    }

    if(props.isLogin) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <div>Login</div>
        <LoginForm onSubmit={submit}/>
    </div>
}
type mapStateToPropsType = {
    isLogin: boolean
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
const mapStateToProps = (state: storeType) : mapStateToPropsType => {
    return {
        isLogin: state.auth.isLogin
    }
}
type LoginPropsType = mapStateToPropsType & mapDispatchToPropsType
export default connect(mapStateToProps, {login})(Login)