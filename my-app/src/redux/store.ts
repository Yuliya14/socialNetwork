import img1 from "../Img/ava_women_1.png";
import img2 from "../Img/ava_men_1.jpg";
import img3 from "../Img/ava_women_2.png";
import postReducer, {actionsPostType} from "./post-reducer.";
import messageReducer, {actionsMessageType} from "./message-reducer.";

export type actionsType = actionsPostType | actionsMessageType

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
export type profilePageType = {
    posts: Array<postsDataType>
    newPostText: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesDataType>
    newMessageText: string
}
export type stateType = {
    ProfilePage: profilePageType
    DialogsPage: dialogsPageType
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
        this._state.ProfilePage = postReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = messageReducer(this._state.DialogsPage, action)

        this._callSubscriber(this._state)
    },
}

export default store