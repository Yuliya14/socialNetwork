import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css'

const NavBar = () => {
    return <div className={s.navBar}>
        <div className={s.item}><NavLink activeClassName={s.active} to= "/profile">Profile</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to= "/people">People</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to= "/dialogs">Dialogs</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to= "/news">News</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to= "/music">Music</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to= "/settings">Settings</NavLink></div>
    </div>
}
export default NavBar;