import React from 'react'
import {addMessageAC, changeMessageTextAC, dialogsPageType} from "../../redux/message-reducer";
import Dialogs from "./Dialogs.";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {authType} from "../../redux/auth-reducer";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
    auth: authType
}
type mapStateToDispatchType = {
    addMessageCallBack:  (messageText: string) => void
    changeMessageTextCallBack: (newMessageText: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapStateToDispatchType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        dialogsPage: state.DialogsPage,
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapStateToDispatchType => {
    return {
        addMessageCallBack: (messageText: string) => dispatch(addMessageAC(messageText)),
        changeMessageTextCallBack: (newMessageText: string) => dispatch(changeMessageTextAC(newMessageText))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer