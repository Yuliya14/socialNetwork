const ADD_MESSAGE = "message/ADD-MESSAGE"

export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesDataType>
}
export type actionsType = ReturnType<typeof addMessageAC>

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
    ]
}

const messageReducer = (state = initState, action: actionsType): dialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state,
                messages: [{id: 1, message: action.messageText}, ...state.messages],
            }
        default:
            return state
    }
}

export const addMessageAC = (messageText: string) => ({type: ADD_MESSAGE, messageText}) as const

export default messageReducer