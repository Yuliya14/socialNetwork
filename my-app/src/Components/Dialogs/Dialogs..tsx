import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {actionsType, dialogsPageType} from "../../redux/store";
import {addMessageAC, changeMessageTextAC} from "../../redux/message-reducer.";


type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: actionsType) => void
}
const Dialogs = (props: DialogsPropsType) => {

    const textareaMessageRef = React.createRef() as React.RefObject<HTMLTextAreaElement>

    const addMessage = () => {
       if (textareaMessageRef.current?.value) {
           props.dispatch(addMessageAC(textareaMessageRef.current?.value))
       }
    }
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.dispatch(changeMessageTextAC(e.currentTarget.value))
    }

    return <div>
        <div>
            <textarea ref={textareaMessageRef} placeholder={"Enter you message"}
            value = {props.dialogsPage.newMessageText} onChange = {changeMessageText}/>
        </div>
        <button onClick={ addMessage }>Add message</button>
        <div className={s.Dialogs}>
            <div className={s.dialogs}>
                {props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)}
            </div>
        </div>
    </div>
}
export default Dialogs