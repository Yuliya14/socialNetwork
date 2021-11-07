import React from 'react'
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {
    follow, getUser, toggleDisabledButton, unFollow,
    usersPageType, userType
} from "../../redux/user-reducer";
import People from "./People";
import Preloader from "../common/Preloader";
import {authType} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

class PeopleAPIContainer extends React.Component <PeoplePropsType, usersPageType> {
    componentDidMount() {
        this.props.getUser(this.props.countUsersOnPage, this.props.currentPage)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUser(this.props.countUsersOnPage, pageNumber)
    }

    render() {
        if(!this.props.auth.isLogin) return <Redirect to={'/login'}/>
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
    auth: authType
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    toggleDisabledButton: (isFollowing: boolean, userId: number) => void
    getUser: (countUsersOnPage: number, currentPage: number) => void
}

export type PeoplePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        usersTotalCount: state.UsersPage.usersTotalCount,
        countUsersOnPage: state.UsersPage.countUsersOnPage,
        currentPage: state.UsersPage.currentPage,
        isLoad: state.UsersPage.isLoad,
        followingUser: state.UsersPage.followingUser,
        auth: state.auth
    }
}

const PeopleContainer = connect(mapStateToProps, {
    toggleDisabledButton,
    getUser,
    unFollow,
    follow
})(PeopleAPIContainer)

export default PeopleContainer