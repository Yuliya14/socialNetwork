import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA"

export type actionsType = ReturnType<typeof setUserAuthData>

export type authType = {
    id: number | null
    email: string | null
    login: string | null
    isLogin: boolean
}

const initState: authType = {
    id: null,
    email: null,
    login: null,
    isLogin: false,
}
const authReducer = (state = initState, action: actionsType): authType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isLogin: true
            }
        default:
            return state
    }
}
export const setUserAuthData = (userId: number, email: string, login: string) => ({
    type: SET_AUTH_USER_DATA,
    userData: {userId, email, login}
}) as const

export const setUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.setUser()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setUserAuthData(id, email, login))
                }
            })
    }
}
export default authReducer