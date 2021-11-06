import React from 'react'
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, togglePreloadAC,
    unFollowAC, usersPageType,
    userType
} from "../../redux/user-reducer";
import People from "./People";
import axios from "axios";
import Preloader from "../common/Preloader";

class PeopleAPIContainer extends React.Component <PeoplePropsType, usersPageType> {
    componentDidMount() {
        this.props.togglePreload(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${this.props.countUsersOnPage}&page=${this.props.currentPage}`,
            {withCredentials: true})
            .then((response) => {
                this.props.togglePreload(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.togglePreload(true)
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?count=${this.props.countUsersOnPage}&page=${pageNumber}`, { withCredentials: true,})
            .then((response) => {
                this.props.togglePreload(false)
                this.props.setUsers(response.data.items)
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
                    unFollow={this.props.unFollow}/></>
    }
}

type mapStateToPropsType = {
    users: Array<userType>
    usersTotalCount: number
    countUsersOnPage: number
    currentPage: number
    isLoad: boolean
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPageAC: (pages: number) => void
    setTotalUsersCount: (totalCount: number) => void
    togglePreload: (isLoad: boolean) => void
}

export type PeoplePropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        users: state.UsersPage.users,
        usersTotalCount: state.UsersPage.usersTotalCount,
        countUsersOnPage: state.UsersPage.countUsersOnPage,
        currentPage: state.UsersPage.currentPage,
        isLoad: state.UsersPage.isLoad
    }
}

const PeopleContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPageAC: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    togglePreload: togglePreloadAC
})(PeopleAPIContainer)

export default PeopleContainer