import React from 'react'
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs.";
import StoreContext from "../../redux/contextAPI";

type DialogsContainerPropsType = {}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    return <StoreContext.Consumer>
        {(state) => {
            const addMessageCallBack = (messageText: string) => {
                state.dispatch(addMessageAC(messageText))
            }
            const changeMessageTextCallBack = (newMessageText: string) => {
                state.dispatch(changeMessageTextAC(newMessageText))
            }

            return <Dialogs dialogsPage={state.getState().DialogsPage}
                  addMessageCallBack={addMessageCallBack}
                  changeMessageTextCallBack={changeMessageTextCallBack}/>}}
    </StoreContext.Consumer>
}
export default DialogsContainer