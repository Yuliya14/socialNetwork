import React from "react";
import LoginForm, {LoginFormDataType} from "../../reduxFormComponent/LoginForm/LoginForm";

const Login = () => {
    const submit = (values: LoginFormDataType) => {
        console.log(values)
    }
    return <div>
        <div>Login</div>
        <LoginForm onSubmit={submit}/>
    </div>
}
export default Login