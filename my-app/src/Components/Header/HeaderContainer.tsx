import React from "react";
import {connect} from "react-redux";
import {authType, logout, setUserData} from "../../redux/auth-reducer";
import {storeType} from "../../redux/redux-store";
import Header from "./Header";
import {compose} from "redux";

class HeaderAPIContainer extends React.Component<HeaderPropsType, authType> {
    componentDidMount() {
        this.props.setUserData()
    }
    render() {
        return <Header {...this.props}/>;
    }
}
type mapStateToPropsType = {
    login: string | null
    isLogin: boolean
}
type mapDispatchToPropsType = {
    setUserData: () => void
    logout: () => void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        login: state.auth.password,
        isLogin: state.auth.isLogin,
    }
}
export default compose(connect(mapStateToProps, {setUserData, logout}))(HeaderAPIContainer);