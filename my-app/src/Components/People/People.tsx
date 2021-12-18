import React from 'react'
import s from "./User/User.module.css";
import {userType} from "../../redux/user-reducer";
import Paginator from "../common/Paginator/Paginator";
import {User} from './User/User';

type PeoplePropsType = {
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<userType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleDisabledButton: (isFollowing: boolean, userId: number) => void
    followingUser: Array<number>
    totalItemsCount: number
    countUsersOnPage: number
}
const People = React.memo((props: PeoplePropsType) => {
    return <div>
        <Paginator totalItemsCount = {props.totalItemsCount} countUsersOnPage = {props.countUsersOnPage}
                   currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
        {props.users.map(u => <div className={s.User}><User key={u.id} users={props.users}
                                                            followingUser={props.followingUser}
                                                            follow={props.follow}
                                                            unFollow={props.unFollow}/></div>)}
    </div>
})

export default People