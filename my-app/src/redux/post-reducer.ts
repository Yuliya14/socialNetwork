import img1 from "../assets/Img/ava_women_1.png";
import img2 from "../assets/Img/ava_men_1.jpg";
import img3 from "../assets/Img/ava_women_2.png";


const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
const GET_USER_PROFILE = "GET-USER-PROFILE"

export type actionsType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostTextAC>
| ReturnType<typeof getUserProfile>

export type postsDataType = {
    id: number
    imgUrl: string
    message: string
    likesCount: number
}
export type contactDataType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string
    large: string
}
export type profileDataType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactDataType
    photos: photosType
} | null
export type profilePageType = {
    posts: Array<postsDataType>
    newPostText: string
    profile: profileDataType | null
}

const initState: profilePageType = {
    posts: [
        {id: 1, imgUrl: img1, message: "Hello!", likesCount: 15},
        {id: 2, imgUrl: img2, message: "How are you?", likesCount: 8},
        {id: 3, imgUrl: img3, message: "I learn IT and i like this!", likesCount: 149}],
    newPostText: "",
    profile: null
}

const postReducer = (state = initState, action: actionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 4, imgUrl: img1, message: state.newPostText, likesCount: 0}, ...state.posts],
                newPostText: ""
            }
        case CHANGE_POST_TEXT:
            return {...state, newPostText: action.newPostText}
        case GET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}
export const addPostAC = (postText: string) => ({type: ADD_POST, postText}) as const
export const changePostTextAC = (newPostText: string) => ({type: CHANGE_POST_TEXT, newPostText}) as const
export const getUserProfile = (profile: profileDataType) => ({type: GET_USER_PROFILE, profile}) as const

export default postReducer