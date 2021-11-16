import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"

export type actionsType = ReturnType<typeof setUserAuthData>

export type authType = {
    id: string | undefined
    email: string | null
    password: string | null
    isLogin: boolean
}

const initState: authType = {
    id: undefined,
    email: null,
    password: null,
    isLogin: false,
}
const authReducer = (state = initState, action: actionsType): authType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export const setUserAuthData = (userId: string | undefined, email: string | null, login: string | null, isLogin: boolean) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isLogin}
}) as const

export const setUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, password} = response.data
                    dispatch(setUserAuthData(id, email, password, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserData())
                } else {
                    const message = response.messages.length > 1 ? response.messages[1] : "some error"
                    dispatch(stopSubmit("login", {_error: message }))
                }
            })
    }
}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserAuthData(undefined, null, null, false))
                }
            })
    }
}
export default authReducer