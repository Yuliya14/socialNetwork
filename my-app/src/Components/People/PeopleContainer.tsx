import React from 'react'
import {connect} from "react-redux";
import People from "./People";
import {storeType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, userType} from "../../redux/user-reducer";

const mapStateToProps = (state: storeType) => {
    return {
       users: state.UsersPage.users
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<userType>) => dispatch(setUsersAC(users))
    }
}
const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(People)
export default PeopleContainer