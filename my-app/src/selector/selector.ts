import {storeType} from "../redux/redux-store";

export const users = (state: storeType) => {
    return state.UsersPage.users
}
export const usersTotalCount = (state: storeType) => {
    return state.UsersPage.usersTotalCount
}
export const countUsersOnPage = (state: storeType) => {
    return state.UsersPage.countUsersOnPage
}
export const currentPage = (state: storeType) => {
    return state.UsersPage.currentPage
}
export const isLoad = (state: storeType) => {
    return state.UsersPage.isLoad
}
export const followingUser = (state: storeType) => {
    return state.UsersPage.followingUser
}
