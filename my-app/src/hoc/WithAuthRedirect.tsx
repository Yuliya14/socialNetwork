import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {storeType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapRedirectStateToPropsType = {
    isLogin: boolean
}
const mapRedirectStateToProps = (state: storeType): mapRedirectStateToPropsType => {
    return {
        isLogin: state.auth.isLogin
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>)  {

    function RedirectComponent(props: mapRedirectStateToPropsType) {
        let {isLogin, ...restProps} = props
        if (!isLogin) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapRedirectStateToProps)(RedirectComponent)
}