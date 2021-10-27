import img1 from "../Img/ava_women_1.png";
import img2 from "../Img/ava_men_1.jpg";
import img3 from "../Img/ava_women_2.png";
import {renderEntireTree} from "../render";

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
}
export type DialogsPageType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesDataType>
}
export type stateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}

let state: stateType = {
    ProfilePage: {
        posts: [
            {id: 1, imgUrl: img1, message: "Hello!", likesCount: 15},
            {id: 2, imgUrl: img2, message: "How are you?", likesCount: 8},
            {id: 3, imgUrl: img3, message: "I learn IT and i like this!", likesCount: 149}]
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
        ]
    }
}

export let addPost = (text: string) => {
    let newPost = {id: 4, imgUrl: img1, message: text, likesCount: 0}
    state.ProfilePage.posts.unshift(newPost)
    renderEntireTree(state)
}
export let addMessage = (text: string) => {
    let newMessage = {id: 1, message: text}
    state.DialogsPage.messages.unshift(newMessage)
    renderEntireTree(state)
}

export default state