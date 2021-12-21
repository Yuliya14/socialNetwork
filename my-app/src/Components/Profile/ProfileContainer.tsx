import React from 'react'
import {
    getStatus,
    getUser,
    profileDataType,
    profilePageType,
    saveData,
    savePhoto,
    updateStatus
} from "../../redux/post-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux';

class ProfileContainer extends React.Component<propsType, profilePageType> {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "19471"
        }
        this.props.getUser(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<propsType>, prevState: Readonly<profilePageType>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
        />
    }
}

type mapStateToPropsType = {
    profile: profileDataType
    status: string
    isLogin: boolean
    userId: string | undefined
}
type mapDispatchToPropsType = {
    getUser: (userId: string | undefined) => void
    getStatus: (userId: string | undefined) => void
    updateStatus: (status: any) => void
    savePhoto: (photo: any) => void
    saveData: (profileData: any) => void
}
export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & {
    isOwner: boolean
}
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        isLogin: state.auth.isLogin,
        userId: state.auth.id
    }
}

type userIdType = {
    userId: string | undefined
}
type propsType = RouteComponentProps<userIdType> & ProfilePropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUser, getStatus, updateStatus, savePhoto, saveData}),
    WithAuthRedirect,
    withRouter)(ProfileContainer)
