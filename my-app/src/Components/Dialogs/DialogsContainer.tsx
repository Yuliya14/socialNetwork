import React from 'react'
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer";
import Dialogs from "./Dialogs.";


type DialogsContainerPropsType = {
    store: any
}
const DialogsContainer = (props: DialogsContainerPropsType) => {

    const addMessageCallBack = (messageText: string) => {
        props.store.dispatch(addMessageAC(messageText))
    }
    const changeMessageTextCallBack = (newMessageText: string) => {
        props.store.dispatch(changeMessageTextAC(newMessageText))
    }

    return <Dialogs dialogsPage={props.store.getState().DialogsPage}
                    addMessageCallBack={addMessageCallBack}
                    changeMessageTextCallBack={changeMessageTextCallBack}/>
}
export default DialogsContainer