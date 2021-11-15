import React from "react";
import LoginForm, {FormDataType} from "./LoginForm";

const Login = () => {
    const submit = (values: FormDataType) => {
        console.log(values)
    }
    return <div>
        <div>Login</div>
        <LoginForm onSubmit={submit}/>
    </div>
}
export default Login