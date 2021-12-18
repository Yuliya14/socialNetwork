import React from 'react'
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {
    follow, getUser, toggleDisabledButton, unFollow,
    usersPageType, userType
} from "../../redux/user-reducer";
import People from "./People";
import Preloader from "../common/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    countUsersOnPage,
    currentPage,
    followingUser,
    usersTotalCount,
    isLoad, getUsers
} from "../../selector/selector";

class PeopleAPIContainer extends React.Component <PeoplePropsType, usersPageType> {
    componentDidMount() {
        this.props.getUser(this.props.countUsersOnPage, this.props.currentPage)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUser(this.props.countUsersOnPage, pageNumber)
    }

    render() {
        return <>
            <Preloader isLoad={this.props.isLoad}/>
            <People currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    toggleDisabledButton = {this.props.toggleDisabledButton}
                    followingUser = {this.props.followingUser}
                    totalItemsCount = {this.props.usersTotalCount}
                    countUsersOnPage = {this.props.countUsersOnPage}
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
    toggleDisabledButton: (isFollowing: boolean, userId: number) => void
    getUser: (countUsersOnPage: number, currentPage: number) => void
}

export type PeoplePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        users: getUsers(state),
        usersTotalCount: usersTotalCount(state),
        countUsersOnPage: countUsersOnPage(state),
        currentPage: currentPage(state),
        isLoad: isLoad(state),
        followingUser: followingUser(state),
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {toggleDisabledButton, getUser, unFollow, follow}),
    WithAuthRedirect
)(PeopleAPIContainer)
