import img1 from "../Img/ava_women_1.png";
import img2 from "../Img/ava_men_1.jpg";
import img3 from "../Img/ava_women_2.png";

const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"

export type actionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC>
export type postsDataType = {
    id: number
    imgUrl: string
    message: string
    likesCount: number
}
export type profilePageType = {
    posts: Array<postsDataType>
    newPostText: string
}

const initState: profilePageType = {
    posts: [
        {id: 1, imgUrl: img1, message: "Hello!", likesCount: 15},
        {id: 2, imgUrl: img2, message: "How are you?", likesCount: 8},
        {id: 3, imgUrl: img3, message: "I learn IT and i like this!", likesCount: 149}],
    newPostText: ""
}

const postReducer = (state = initState, action: actionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 4, imgUrl: img1, message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ""
            return {...state}
        }
        case CHANGE_POST_TEXT: {
            state.newPostText = action.newPostText
            return {...state}
        }
        default:
            return {...state}
    }
}
export const addPostAC = (postText: string) => ({type: ADD_POST, postText}) as const
export const changePostTextAC = (newPostText: string) => ({type: CHANGE_POST_TEXT, newPostText}) as const

export default postReducer