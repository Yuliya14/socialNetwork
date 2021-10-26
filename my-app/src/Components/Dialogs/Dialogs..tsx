import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
const Dialogs = (props: DialogsPropsType) => {
    return <div className={s.Dialogs}>
        <div className={s.dialogs}>
            {props.dialogsPage.dialogs.map(d => <Dialog id={d.id} name={d.name}/>)}
        </div>
        <div className={s.messages}>
            {props.dialogsPage.messages.map(m =>  <Message id = {m.id} message={m.message}/>)}
        </div>
    </div>
}
export default Dialogs