import React from "react";
import {connect} from "react-redux";
import {authType,  setUserData} from "../../redux/auth-reducer";
import {storeType} from "../../redux/redux-store";
import Header from "./Header";

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
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isLogin: state.auth.isLogin,
    }
}
const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPIContainer)
export default HeaderContainer;