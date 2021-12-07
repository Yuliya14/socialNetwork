import React from 'react'
import s from "./User/User.module.css";
import userImg from "../../assets/Img/user.png";
import style from './People.module.css'
import {userType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";
import {peopleAPI} from "../../api/api";

type PeoplePropsType = {
    pages: number[]
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<userType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleDisabledButton: (isFollowing: boolean, userId: number) => void
    followingUser: Array<number>
}
const People = React.memo((props: PeoplePropsType) => {
    return <div>
        <div>
            {props.pages.map(p => <span key={p} className={props.currentPage === p ? style.currentPage : ""}
                                        onClick={() => {props.onPageChanged(p)
                                        }}> {p} </span>).splice(0, 5)}
            <button onClick={() => {
            }}>next
            </button>
        </div>
        {props.users.map(u => <div key={u.id} className={s.User}>
            <div className={s.userBlock}>
                <NavLink to={`/profile/${u.id}`}><img style={{width: "100px", height: "100px"}}
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
})

export default People