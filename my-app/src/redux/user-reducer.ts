const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

export type actionsType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export type professionSphereType = {
    professionalArea: string
    position: string
}
export type userType = {
    id: number
    fullName: string,
    photoUrl: string
    mail: string,
    professionSphere: professionSphereType
    follow: boolean
}
export type usersPageType = {
    users: Array<userType>
}

const initState: usersPageType = {
    users: []
}
const userReducer = (state = initState, action: actionsType): usersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, follow: false} : u)]}
        case "UNFOLLOW":
            return {...state, users: [...state.users.map(u => u.id === action.userId ? {...u, follow: true} : u)]}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users] }
        default:
            return state
    }
}
export const followAC = (userId: number) => ({type: FOLLOW, userId}) as const
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId}) as const
export const setUsersAC = (users: Array<userType>) => ({type: SET_USERS, users}) as const

export default userReducer