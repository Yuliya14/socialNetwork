import React from 'react'
import {getUserProfile, profileDataType, profilePageType} from "../../redux/post-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import axios from "axios";

class ProfileAPIContainer extends React.Component<ProfilePropsType, profilePageType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0//profile/2")
            .then((response) => {this.props.getUserProfile(response.data)})
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
export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(ProfileAPIContainer);