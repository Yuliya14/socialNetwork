import React from 'react'
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleDisabledButton, togglePreloadAC,
    unFollowAC, usersPageType,
    userType
} from "../../redux/user-reducer";
import People from "./People";
import Preloader from "../common/Preloader";
import {peopleContainerAPI} from "../../api/api";

class PeopleAPIContainer extends React.Component <PeoplePropsType, usersPageType> {
    componentDidMount() {
        this.props.togglePreload(true)
        peopleContainerAPI.getUser(this.props.countUsersOnPage, this.props.currentPage)
            .then((response) => {
                this.props.togglePreload(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.togglePreload(true)
        this.props.setCurrentPageAC(pageNumber)
        peopleContainerAPI.getUser(this.props.countUsersOnPage, pageNumber)
          .then((response) => {
                this.props.togglePreload(false)
                this.props.setUsers(response.items)
            })
    }

    render() {
        let pages = []
        let countPages = Math.ceil(this.props.usersTotalCount / this.props.countUsersOnPage)
        for (let i = 1; i <= countPages; i++) {
            pages.push(i)
        }
        return <>
            <Preloader isLoad={this.props.isLoad}/>
            <People pages={pages}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    toggleDisabledButton = {this.props.toggleDisabledButton}
                    followingUser = {this.props.followingUser}
            /></>
    }
}

type mapStateToPropsType = {
    users: Array<userType>
    usersTotalCount: number
    countUsersOnPage: number
    currentPage: number
    isLoad: boolean
    followingUser: Array<number>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPageAC: (pages: number) => void
    setTotalUsersCount: (totalCount: number) => void
    togglePreload: (isLoad: boolean) => void
    toggleDisabledButton: (isFollowing: boolean, userId: number) => void
}

export type PeoplePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        usersTotalCount: state.UsersPage.usersTotalCount,
        countUsersOnPage: state.UsersPage.countUsersOnPage,
        currentPage: state.UsersPage.currentPage,
        isLoad: state.UsersPage.isLoad,
        followingUser: state.UsersPage.followingUser
    }
}

const PeopleContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPageAC: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    togglePreload: togglePreloadAC,
    toggleDisabledButton
})(PeopleAPIContainer)

export default PeopleContainer