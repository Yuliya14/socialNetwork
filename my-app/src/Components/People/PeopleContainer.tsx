import React from 'react'
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC, usersPageType,
    userType
} from "../../redux/user-reducer";
import {Dispatch} from "redux";
import People from "./People";
import axios from "axios";

class PeopleAPIContainer extends React.Component <PeoplePropsType, usersPageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${this.props.countUsersOnPage}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${this.props.countUsersOnPage}&page=${pageNumber}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pages = []
        let countPages = Math.ceil(this.props.usersTotalCount / this.props.countUsersOnPage)
        for (let i = 1 ; i <= countPages ; i++){
            pages.push(i)
        }
        return <People users={this.props.users}
                       usersTotalCount={this.props.usersTotalCount}
                       countUsersOnPage={this.props.countUsersOnPage}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       setUsers={this.props.setUsers}
                       pages = {pages}
                       onPageChanged = {this.onPageChanged}
                       setCurrentPageAC={this.props.setCurrentPageAC}
                       setTotalUsersCount={this.props.setTotalUsersCount}/>
    }
}

type mapStateToPropsType = {
    users: Array<userType>
    usersTotalCount: number
    countUsersOnPage: number
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPageAC: (pages: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type PeoplePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        usersTotalCount: state.UsersPage.usersTotalCount,
        countUsersOnPage: state.UsersPage.countUsersOnPage,
        currentPage: state.UsersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => dispatch(followAC(userId)),
        unFollow: (userId: number) => dispatch(unFollowAC(userId)),
        setUsers: (users: Array<userType>) => dispatch(setUsersAC(users)),
        setCurrentPageAC: (pages: number) => dispatch(setCurrentPageAC(pages)),
        setTotalUsersCount: (totalCount: number) => dispatch(setTotalUsersCountAC(totalCount)),
    }
}
const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(PeopleAPIContainer)
export default PeopleContainer