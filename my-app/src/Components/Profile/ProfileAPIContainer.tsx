import React from 'react'
import {getUser, profileDataType, profilePageType} from "../../redux/post-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import {authType} from "../../redux/auth-reducer";

class ProfileAPIContainer extends React.Component<propsType, profilePageType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getUser(userId)
    }
    render() {
        if (!this.props.auth.isLogin) return <Redirect to = {'/login'}/>
        return <Profile {...this.props}/>
    }
}
type mapStateToPropsType = {
    profile: profileDataType
    auth: authType
}
type mapDispatchToPropsType = {
    getUser: (userId: string | undefined) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        auth: state.auth
    }
}

type userIdType = {
    userId: string | undefined
}
type propsType = RouteComponentProps<userIdType> &  ProfilePropsType
const ProfileWithRouterContainer = withRouter(ProfileAPIContainer)
export const ProfileContainer = connect(mapStateToProps, {getUser})( ProfileWithRouterContainer);