import axios from "axios";
import React from "react";
import {connect} from "react-redux";
import {authType, setUserAuthData} from "../../redux/auth-reducer";
import {storeType} from "../../redux/redux-store";
import Header from "./Header";


class HeaderAPIContainer extends React.Component<HeaderPropsType, authType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserAuthData(id, email, login)
                }
            })
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
    setUserAuthData: (userId: number, email: string, login: string) => void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType
const mapStateToProps = (state: storeType): mapStateToPropsType=> {
    return {
       login: state.auth.login,
       isLogin: state.auth.isLogin,
    }
}
const HeaderContainer = connect(mapStateToProps, {setUserAuthData})(HeaderAPIContainer)
export default HeaderContainer;