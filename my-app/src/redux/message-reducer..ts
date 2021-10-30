import {actionsType, dialogsPageType} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"

const initState: dialogsPageType = {
    dialogs: [
        {id: 1, name: "Lena"},
        {id: 2, name: "Vika"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Yuliya"}
    ],
    messages: [
        {id: 1, message: "Hello!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo-yo"},
    ],
    newMessageText: ""
}

export type actionsMessageType = ReturnType<typeof addMessageAC> | ReturnType<typeof changeMessageTextAC>

const messageReducer = (state = initState, action: actionsType): dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {id: 1, message: state.newMessageText}
            state.messages.unshift(newMessage)
            state.newMessageText = ""
            return state
        }
        case CHANGE_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText
            return state
        }
        default:
            return state
    }
}

export const addMessageAC = (messageText: string) => ({type: ADD_MESSAGE, messageText}) as const
export const changeMessageTextAC = ( newMessageText: string) => ({type: CHANGE_MESSAGE_TEXT, newMessageText}) as const

export default messageReducer