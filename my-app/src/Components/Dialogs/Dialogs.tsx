import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import MessageForm, {MessageFormType} from "../../reduxFormComponent/MessageForm/MessageReduxForm";


const Dialogs = React.memo((props: DialogsPropsType) => {
    const addMessage = (values: MessageFormType) => {
        if (values.message) {
            props.addMessageCallBack(values.message)
        }
    }
    return <div>
        <MessageForm onSubmit={addMessage}/>
        <div className={s.Dialogs}>
            <div className={s.dialogs}>
                {props.dialogsPage.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
            </div>
        </div>
    </div>
})
export default Dialogs

