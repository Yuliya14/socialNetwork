import {addMessageAC, dialogsPageType} from "../../redux/message-reducer";
import {connect} from "react-redux";
import {storeType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import React from "react";

type mapStateToPropsType = {
    dialogsPage: dialogsPageType
}
type mapStateToDispatchType = {
    addMessageCallBack: (messageText: string) => void
}
export type DialogsPropsType = mapStateToPropsType & mapStateToDispatchType

const mapStateToProps = (state: storeType): mapStateToPropsType => {
    return {
        dialogsPage: state.DialogsPage,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessageCallBack: addMessageAC}),
    WithAuthRedirect)(Dialogs)