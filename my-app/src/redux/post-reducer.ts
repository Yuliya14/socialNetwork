import img1 from "../assets/Img/ava_women_1.png";
import img2 from "../assets/Img/ava_men_1.jpg";
import img3 from "../assets/Img/ava_women_2.png";
import {profileAPI} from "../api/api";
import {Dispatch} from "redux";


const ADD_POST = "post/ADD-POST"
const GET_USER_PROFILE = "post/GET-USER-PROFILE"
const GET_STATUS = "post/GET-STATUS"
const SAVE_PHOTO = "post/SAVE_PHOTO"

export type actionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof getUserProfile>
    | ReturnType<typeof setStatusProfile>
    | ReturnType<typeof savePhotoSuccess>

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
    profile: any
    status: string
}

const initState: profilePageType = {
    posts: [
        {id: 1, imgUrl: img1, message: "Hello!", likesCount: 15},
        {id: 2, imgUrl: img2, message: "How are you?", likesCount: 8},
        {id: 3, imgUrl: img3, message: "I learn IT and i like this!", likesCount: 149}],
    profile: null,
    status: "",
}

const postReducer = (state = initState, action: actionsType): profilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 4, imgUrl: img1, message: action.postText, likesCount: 0}, ...state.posts],
            }
        case GET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}}
        case GET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}
export const addPostAC = (postText: string) => ({type: ADD_POST, postText}) as const
export const getUserProfile = (profile: profileDataType) => ({type: GET_USER_PROFILE, profile}) as const
export const setStatusProfile = (status: string) => ({type: GET_STATUS, status}) as const
export const savePhotoSuccess = (photo: photosType) => ({type: SAVE_PHOTO, photo}) as const

export const getUser = (userId: string | undefined) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getProfileUser(userId)
        dispatch(getUserProfile(response))
    }
}
export const getStatus = (userId: string | undefined) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatusProfile(response))
    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0)
            dispatch(setStatusProfile(response))
    }
}
export const savePhoto = (file: string) => {
    return async (dispatch: Dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0)
            dispatch(savePhotoSuccess(response.data.photo))
    }
}
export const saveData = (file: any) => {
    return async (dispatch: Dispatch, getState: any) => {
        const userId = getState().auth.userId
        let response = await profileAPI.saveData(file)
        if (response.data.resultCode === 0) {
            getUser(userId)
        }
    }
}
export default postReducer