import React from 'react'
import {getUserProfile, profileDataType, profilePageType} from "../../redux/post-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileAPIContainer extends React.Component<propsType, profilePageType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        profileAPI.getProfileUser(userId).then((response) => {this.props.getUserProfile(response)})
    }
    render() {
        return <Profile {...this.props}/>
    }
}
type mapStateToPropsType = {
    profile: profileDataType
}
type mapDispatchToPropsType = {
    getUserProfile: (profile: profileDataType) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile
    }
}

type userIdType = {
    userId: string | undefined
}
type propsType = RouteComponentProps<userIdType> &  ProfilePropsType
const ProfileWithRouterContainer = withRouter(ProfileAPIContainer)
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})( ProfileWithRouterContainer);