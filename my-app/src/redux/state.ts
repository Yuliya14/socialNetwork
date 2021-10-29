import img1 from "../Img/ava_women_1.png";
import img2 from "../Img/ava_men_1.jpg";
import img3 from "../Img/ava_women_2.png";

const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"

export type actionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC> |
    ReturnType<typeof addMessageAC> | ReturnType<typeof changeMessageTextAC>

export type postsDataType = {
    id: number
    imgUrl: string
    message: string
    likesCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<postsDataType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesDataType>
    newMessageText: string
}
export type stateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}

export type observerType = (state: stateType) => void
export type storeType = {
    _state: stateType
    _callSubscriber: (state: stateType) => void
    getState: () => stateType
    subscriber: (observer: observerType) => void
    dispatch: (action: actionsType) => void
}

let store: storeType = {
    _state:  {
        ProfilePage: {
            posts: [
                {id: 1, imgUrl: img1, message: "Hello!", likesCount: 15},
                {id: 2, imgUrl: img2, message: "How are you?", likesCount: 8},
                {id: 3, imgUrl: img3, message: "I learn IT and i like this!", likesCount: 149}],
            newPostText: ""
        },
        DialogsPage: {
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
    },
    _callSubscriber (state) {console.log("state")},

    getState () {return this._state},
    subscriber (observer) {
        store._callSubscriber = observer
    },

    dispatch (action) {
       switch (action.type) {
           case ADD_POST: {
               let newPost = {id: 4, imgUrl: img1, message: this._state.ProfilePage.newPostText, likesCount: 0}
               this._state.ProfilePage.posts.unshift(newPost)
               this._state.ProfilePage.newPostText = ""
               this._callSubscriber(this._state)
               break
           }
           case CHANGE_POST_TEXT:  {
               this._state.ProfilePage.newPostText = action.newPostText
               this._callSubscriber(this._state)
               break
           }
           case ADD_MESSAGE: {
               let newMessage = {id: 1, message: this._state.DialogsPage.newMessageText}
               this._state.DialogsPage.messages.unshift(newMessage)
               this._state.DialogsPage.newMessageText = ""
               this._callSubscriber(this._state)
               break
           }
           case CHANGE_MESSAGE_TEXT: {
               this._state.DialogsPage.newMessageText = action.newMessageText
               this._callSubscriber(this._state)
               break
           }
       }
    },
}

export const addPostAC = (postText: string) => ({type: ADD_POST, postText}) as const
export const changePostTextAC = ( newPostText: string) => ({type: CHANGE_POST_TEXT, newPostText}) as const
export const addMessageAC = (messageText: string) => ({type: ADD_MESSAGE, messageText}) as const
export const changeMessageTextAC = ( newMessageText: string) => ({type: CHANGE_MESSAGE_TEXT, newMessageText}) as const

export default store