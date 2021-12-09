import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import userImg from "../../../assets/Img/user.png";
import {userType} from "../../../redux/user-reducer";

export type UserType = {
    users: Array<userType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingUser: Array<number>
}
export const User = (props: UserType) => {

    return <div>
        {props.users.map(u => <div className={s.User}>
            <div className={s.userBlock}>
                <NavLink to={`/profile/${u.id}`}>
                    <img style={{width: "100px", height: "100px"}}
                         src={u.photos.small !== null ? u.photos.small : userImg}/></NavLink>
                <div>
                    {u.followed
                        ? <button disabled={props.followingUser.some(id => id === u.id)} onClick={() => {
                            props.unFollow(u.id)
                        }}>UNFOLLOW</button>
                        : <button disabled={props.followingUser.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>FOLLOW</button>}
                </div>
            </div>
            <div className={s.userBlock}>
                <div>{u.name}</div>
                <div>{"u.mail"}</div>
            </div>
            <div>
                <div className={s.userBlock}>{"u.professionSphere.professionalArea"}</div>
                <div>{"u.professionSphere.position"}</div>
            </div>
        </div>)
        }
    </div>
}