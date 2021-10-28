import img1 from "../Img/ava_women_1.png";
import img2 from "../Img/ava_men_1.jpg";
import img3 from "../Img/ava_women_2.png";

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

let store = {
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
    getState () {return this._state},
    _renderEntireTree (state: stateType) {console.log("state")},
    addPost (text: string) {
        let newPost = {id: 4, imgUrl: img1, message: this._state.ProfilePage.newPostText, likesCount: 0}
        this._state.ProfilePage.posts.unshift(newPost)
        this._state.ProfilePage.newPostText = ""
        this._renderEntireTree(this._state)
    },
    changePostText (newPostText: string) {
        this._state.ProfilePage.newPostText = newPostText
        this._renderEntireTree(this._state)
    },
    addMessage (text: string) {
        let newMessage = {id: 1, message: this._state.DialogsPage.newMessageText}
        this._state.DialogsPage.messages.unshift(newMessage)
        this._state.DialogsPage.newMessageText = ""
        this._renderEntireTree(this._state)
    },
    changeMessageText (newMessageText: string) {
        this._state.DialogsPage.newMessageText = newMessageText
        this._renderEntireTree(this._state)
    },
    subscriber (observer: (state: stateType) => void) {
        store._renderEntireTree = observer
    }
}
export default store