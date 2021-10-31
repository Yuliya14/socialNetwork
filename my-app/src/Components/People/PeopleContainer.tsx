import React from 'react'
import {connect} from "react-redux";
import People from "./People";
import {storeType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, userType} from "../../redux/user-reducer";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users:  Array<userType>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
}
export type PeoplePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
       users: state.UsersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<userType>) => dispatch(setUsersAC(users))
    }
}
const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People)
export default PeopleContainer