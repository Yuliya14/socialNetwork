import React from 'react'
import {getStatus, getUser, profileDataType, profilePageType, updateStatus} from "../../redux/post-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';

class ProfileContainer extends React.Component<propsType, profilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "19471"
        }
        this.props.getUser(userId)
        this.props.getStatus(userId)
    }
    render() {
        return <Profile {...this.props}/>
    }
}
type mapStateToPropsType = {
    profile: profileDataType
    status: string
}
type mapDispatchToPropsType = {
    getUser: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: any) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

type userIdType = {
    userId: string | undefined
}
type propsType = RouteComponentProps<userIdType> &  ProfilePropsType

export default  compose<React.ComponentType>(
    connect(mapStateToProps, {getUser, getStatus, updateStatus}),
    WithAuthRedirect,
    withRouter)(ProfileContainer)
