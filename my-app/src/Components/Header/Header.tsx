import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";
const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src = {"https://cdn.iconscout.com/icon/free/png-256/internet-network-2238581-1923035.png"}/>
        {props.isLogin
            ? <div>{props.login} <button onClick={props.logout}>LogOut</button></div>
            : <NavLink to = {"/login"}>Login</NavLink>}
    </header>
}
export default Header;