import {actionsType, profilePageType} from "./store";
import img1 from "../Img/ava_women_1.png";

const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"

export type actionsPostType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC>

const postReducer = (state: profilePageType, action: actionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 4, imgUrl: img1, message: state.newPostText, likesCount: 0}
            state.posts.unshift(newPost)
            state.newPostText = ""
            return state
        }
        case CHANGE_POST_TEXT: {
            state.newPostText = action.newPostText
            return state
        }
        default:
            return state
    }
}
export const addPostAC = (postText: string) => ({type: ADD_POST, postText}) as const
export const changePostTextAC = (newPostText: string) => ({type: CHANGE_POST_TEXT, newPostText}) as const

export default postReducer