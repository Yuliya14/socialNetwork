import React from 'react'
import {getUser, profileDataType, profilePageType} from "../../redux/post-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component<propsType, profilePageType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        this.props.getUser(userId)
    }
    render() {
        return <Profile {...this.props}/>
    }
}
type mapStateToPropsType = {
    profile: profileDataType
}
type mapDispatchToPropsType = {
    getUser: (userId: string | undefined) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
    }
}

type userIdType = {
    userId: string | undefined
}
type propsType = RouteComponentProps<userIdType> &  ProfilePropsType

export default  compose<React.ComponentType>(
    connect(mapStateToProps, {getUser}),
    WithAuthRedirect,
    withRouter)(ProfileContainer)
