import React from 'react'
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

let dialogsData = [
    {id: 1, name: "Lena"},
    {id: 2, name: "Vika"},
    {id: 3, name: "Natasha"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Yuliya"}
]
let messagesDada = [
    {id: 1, message: "Hello!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo-yo"},
]

const Dialogs = () => {
    return <div className={s.Dialogs}>
        <div className={s.dialogs}>
            {dialogsData.map(d => <Dialog id={d.id} name={d.name}/>)}
        </div>
        <div className={s.messages}>
            {messagesDada.map(m =>  <Message id = {m.id} message={m.message}/>)}
        </div>
    </div>
}
export default Dialogs