import React, {ChangeEvent} from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {

    const textareaMessageRef = React.createRef() as React.RefObject<HTMLTextAreaElement>

    const addMessage = () => {
       if (textareaMessageRef.current?.value) {
           props.addMessageCallBack(textareaMessageRef.current?.value)
       }
    }
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.changeMessageTextCallBack(e.currentTarget.value)
    }

    return <div>
        <div>
            <textarea ref={textareaMessageRef} placeholder={"Enter you message"}
            value = {props.dialogsPage.newMessageText} onChange = {changeMessageText}/>
        </div>
        <button onClick={ addMessage }>Add message</button>
        <div className={s.Dialogs}>
            <div className={s.dialogs}>
                {props.dialogsPage.dialogs.map(d => <Dialog key = {d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message key = {m.id} id={m.id} message={m.message}/>)}
            </div>
        </div>
    </div>
}
export default Dialogs