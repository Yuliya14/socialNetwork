import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (messageText: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    const textareaMessageRef = React.createRef() as React.RefObject<HTMLTextAreaElement>

    const addMessage = () => {
       if (textareaMessageRef.current?.value) {
           props.addMessage(textareaMessageRef.current?.value)
       }
    }

    return <div>
        <div>
            <textarea ref={textareaMessageRef} placeholder={"Enter you message"}/>
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