const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_COUNT_PAGES = "SET-COUNT-PAGES"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_PRELOAD = "TOGGLE-PRELOAD"
const TOGGLE_DISABLED_BUTTON = "TOGGLE-DISABLED-BUTTON"

export type actionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC> | ReturnType<typeof togglePreloadAC>
    | ReturnType<typeof toggleDisabledButton>

export type photosType = {
    small: string,
    large: string
}
export type userType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: photosType
    status: string
    followed: boolean
}
export type usersPageType = {
    users: Array<userType>
    usersTotalCount: number
    countUsersOnPage: number
    currentPage: number
    isLoad: boolean
    followingUser: Array<number>
}

const initState: usersPageType = {
    users: [],
    usersTotalCount: 0,
    countUsersOnPage: 5,
    currentPage: 1,
    isLoad: false,
    followingUser: []
}
const userReducer = (state = initState, action: actionsType): usersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)]}
        case UNFOLLOW:
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)]}
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_COUNT_PAGES:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, usersTotalCount: action.totalCount}
        case TOGGLE_PRELOAD:
            return {...state, isLoad: action.isLoad}
        case TOGGLE_DISABLED_BUTTON:
            return {
                ...state,
                followingUser: action.isFollowing
                    ? [...state.followingUser, action.userId]
                    : state.followingUser.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (page: number) => ({type: SET_COUNT_PAGES, page}) as const
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount}) as const
export const togglePreloadAC = (isLoad: boolean) => ({type: TOGGLE_PRELOAD, isLoad}) as const
export const toggleDisabledButton = (isFollowing: boolean, userId: number) => ({
    type: TOGGLE_DISABLED_BUTTON,
    isFollowing,
    userId
}) as const

export default userReducer