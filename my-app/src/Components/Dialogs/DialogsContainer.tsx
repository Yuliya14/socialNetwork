import React from 'react'
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs.";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";

const mapStateToProps = (state: storeType) => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        addMessageCallBack: (messageText: string) => dispatch(addMessageAC(messageText)),
        changeMessageTextCallBack: (newMessageText: string) => dispatch(changeMessageTextAC(newMessageText))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer